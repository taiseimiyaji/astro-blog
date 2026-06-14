import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

export type NoteEntry = {
	title: string;
	date: string;
	href: string;
	rawHref: string;
	slug: string[];
	body: string;
	description: string;
	tags: string[];
};

const noteRoot = fileURLToPath(new URL("../../public/note", import.meta.url));

function findHtmlFiles(directory: string): string[] {
	if (!existsSync(directory)) {
		return [];
	}

	return readdirSync(directory).flatMap((name) => {
		const path = `${directory}/${name}`;
		const stat = statSync(path);
		if (stat.isDirectory()) {
			return findHtmlFiles(path);
		}
		return path.endsWith(".html") ? [path] : [];
	});
}

function stripQuotes(value: string): string {
	return value.replace(/^["']|["']$/g, "");
}

function getCommentValue(html: string, key: string): string | undefined {
	const comments = [...html.matchAll(/<!--([\s\S]*?)-->/g)].map((match) => match[1]);
	const pattern = new RegExp(`^\\s*${key}\\s*:\\s*(.+?)\\s*$`, "im");
	for (const comment of comments) {
		const value = comment.match(pattern)?.[1]?.trim();
		if (value) {
			return stripQuotes(value);
		}
	}
	return undefined;
}

function getTitle(html: string, filePath: string): string {
	return (
		getCommentValue(html, "title") ??
		html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1]?.trim() ??
		filePath.split("/").pop()?.replace(/\.html$/, "") ??
		"Untitled"
	);
}

function getDate(html: string, relativePath: string): string {
	return (
		getCommentValue(html, "createDate") ??
		getCommentValue(html, "date") ??
		relativePath.match(/\d{4}-\d{2}-\d{2}/)?.[0] ??
		relativePath.match(/(\d{4})\/(\d{2})\/(\d{2})/)?.slice(1, 4).join("-") ??
		""
	);
}

function getTags(html: string): string[] {
	const value = getCommentValue(html, "tags");
	if (!value) {
		return [];
	}
	return value
		.replace(/^\[|\]$/g, "")
		.split(",")
		.map((tag) => stripQuotes(tag.trim()))
		.filter(Boolean);
}

function getBody(html: string): string {
	return (
		html.match(/<main[^>]*class=["'][^"']*\bpage\b[^"']*["'][^>]*>([\s\S]*?)<\/main>/i)?.[1]?.trim() ??
		html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]?.trim() ??
		html
	);
}

function getDescription(body: string): string {
	const text = body.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	return text.slice(0, 120);
}

export function getNoteEntries(): NoteEntry[] {
	return findHtmlFiles(noteRoot)
		.map((filePath) => {
			const relativePath = filePath.replace(`${noteRoot}/`, "");
			const html = readFileSync(filePath, "utf-8");
			const slug = relativePath.replace(/\.html$/, "").split("/");
			const body = getBody(html);
			return {
				title: getTitle(html, filePath),
				date: getDate(html, relativePath),
				href: `/note/${slug.join("/")}/`,
				rawHref: `/note/${relativePath}`,
				slug,
				body,
				description: getDescription(body),
				tags: getTags(html),
			};
		})
		.sort((a, b) => b.date.localeCompare(a.date));
}
