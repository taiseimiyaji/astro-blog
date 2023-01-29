import { h as createVNode, F as Fragment } from './astro.a656457a.mjs';
import 'html-escaper';

const html = "<h1 id=\"テスト用markdown\">テスト用Markdown</h1>\n<h2 id=\"テストタイトル\">テストタイトル</h2>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #FF7B72\">class</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">Hoge</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">{</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    </span><span style=\"color: #FF7B72\">public</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">function</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">__construct</span><span style=\"color: #C9D1D9\">()</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    {}</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">}</span></span></code></pre>";

				const frontmatter = {};
				const file = "/Users/miyajitaisei/private/astro-blog/src/content/blog/test.md";
				const url = undefined;
				function getHeadings() {
					return [{"depth":1,"slug":"テスト用markdown","text":"テスト用Markdown"},{"depth":2,"slug":"テストタイトル","text":"テストタイトル"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";

export { Content, collectedLinks, collectedStyles, getHeadings };
