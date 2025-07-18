import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), sitemap()],
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['mermaid'],
		},
		rehypePlugins: [
			[rehypeMermaid, {
				mermaidConfig: {
					theme: 'dark',
					themeVariables: {
						primaryColor: '#6366f1',
						primaryTextColor: '#f3f4f6',
						primaryBorderColor: '#4f46e5',
						lineColor: '#6b7280',
						secondaryColor: '#374151',
						tertiaryColor: '#1f2937',
						background: '#111827',
						mainBkg: '#1f2937',
						secondBkg: '#374151',
						tertiaryBkg: '#4b5563',
						cScale0: '#6366f1',
						cScale1: '#8b5cf6',
						cScale2: '#a855f7',
						edgeLabelBackground: '#1f2937',
						clusterBkg: '#1f2937',
						clusterBorder: '#6b7280',
						defaultLinkColor: '#6b7280',
						titleColor: '#f3f4f6',
						nodeTextColor: '#f3f4f6',
						edgeTextColor: '#f3f4f6',
						actorTextColor: '#f3f4f6',
						signalTextColor: '#f3f4f6',
						labelColor: '#f3f4f6',
						loopTextColor: '#f3f4f6',
						noteBkgColor: '#1f2937',
						noteTextColor: '#f3f4f6',
						activationBkgColor: '#374151',
						activationBorderColor: '#6b7280',
						sequenceNumberColor: '#f3f4f6',
						sectionBkgColor: '#1f2937',
						altSectionBkgColor: '#374151',
						gridColor: '#6b7280',
						personBkg: '#1f2937',
						personBorder: '#6b7280',
						ruleBkg: '#1f2937',
						ruleBorder: '#6b7280',
						requirementBackground: '#1f2937',
						requirementBorderColor: '#6b7280',
						requirementTextColor: '#f3f4f6',
						relationColor: '#6b7280',
						relationLabelBackground: '#1f2937',
						relationLabelColor: '#f3f4f6',
						git0: '#6366f1',
						git1: '#8b5cf6',
						git2: '#a855f7',
						git3: '#ec4899',
						git4: '#f59e0b',
						git5: '#10b981',
						git6: '#06b6d4',
						git7: '#f97316',
						gitBranchLabel0: '#f3f4f6',
						gitBranchLabel1: '#f3f4f6',
						gitBranchLabel2: '#f3f4f6',
						gitBranchLabel3: '#f3f4f6',
						gitBranchLabel4: '#f3f4f6',
						gitBranchLabel5: '#f3f4f6',
						gitBranchLabel6: '#f3f4f6',
						gitBranchLabel7: '#f3f4f6',
						tagLabelColor: '#f3f4f6',
						tagLabelBackground: '#1f2937',
						tagLabelBorder: '#6b7280',
						tagLabelFontSize: '10px',
						commitLabelColor: '#f3f4f6',
						commitLabelBackground: '#1f2937',
						commitLabelFontSize: '10px',
						attributeBackgroundColorOdd: '#1f2937',
						attributeBackgroundColorEven: '#374151',
					}
				}
			}]
		],
	},
});
