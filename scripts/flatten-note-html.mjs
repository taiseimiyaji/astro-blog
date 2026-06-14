import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const noteDistRoot = join(process.cwd(), "dist/note");

function flattenHtmlDirectories(directory) {
	if (!existsSync(directory)) {
		return;
	}

	for (const name of readdirSync(directory)) {
		const path = join(directory, name);
		if (!statSync(path).isDirectory()) {
			continue;
		}

		if (name.endsWith(".html")) {
			const indexPath = join(path, "index.html");
			if (existsSync(indexPath)) {
				const html = readFileSync(indexPath, "utf-8");
				rmSync(path, { recursive: true, force: true });
				writeFileSync(path, html);
			}
			continue;
		}

		flattenHtmlDirectories(path);
	}
}

flattenHtmlDirectories(noteDistRoot);
