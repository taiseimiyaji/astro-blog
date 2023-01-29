import { _ as __astro_tag_component__, c as createCollectionToGlobResultMap, a as createGetEntryBySlug, b as createGetCollection, d as createAstro, e as createComponent, r as renderTemplate, f as renderHead, g as renderComponent } from '../astro.a656457a.mjs';
/* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';

function Header() {
  return /* @__PURE__ */ jsxs("div", {
    className: "header",
    children: [/* @__PURE__ */ jsx("div", {
      className: "title",
      children: "taisei miyaji's room"
    }), /* @__PURE__ */ jsxs("div", {
      className: "header-link",
      children: [/* @__PURE__ */ jsx("div", {
        children: "Article"
      }), /* @__PURE__ */ jsx("div", {
        children: "Activity"
      }), /* @__PURE__ */ jsx("div", {
        children: "SNS"
      })]
    })]
  });
}
__astro_tag_component__(Header, "@astrojs/react");

function Sidebar() {
  return /* @__PURE__ */ jsx("div", {});
}
__astro_tag_component__(Sidebar, "@astrojs/react");

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/tech/test.md": () => import('../test.2fed03e9.mjs'),"/src/content/blog/test.md": () => import('../test.c295546c.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/tech/test.md": () => import('../test.85b88e24.mjs'),"/src/content/blog/test.md": () => import('../test.0c28e777.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const getEntryBySlug = createGetEntryBySlug({
	getCollection,
	collectionToRenderEntryMap,
});

await getEntryBySlug("blog", "post-1");
function Article() {
  return /* @__PURE__ */ jsx("div", {});
}
__astro_tag_component__(Article, "@astrojs/react");

function Content() {
  return /* @__PURE__ */ jsxs("div", {
    className: "content",
    children: [/* @__PURE__ */ jsx(Article, {}), /* @__PURE__ */ jsx(Sidebar, {})]
  });
}
__astro_tag_component__(Content, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  ${renderHead($$result)}</head>
  <body>
      <main>
        ${renderComponent($$result, "Header", Header, {})}
        ${renderComponent($$result, "Content", Content, {})}

      </main>
  </body></html>`;
}, "/Users/miyajitaisei/private/astro-blog/src/pages/index.astro");

const $$file$1 = "/Users/miyajitaisei/private/astro-blog/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slag;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Content", Content, {})}`;
}, "/Users/miyajitaisei/private/astro-blog/src/pages/posts/[slag].astro");

const $$file = "/Users/miyajitaisei/private/astro-blog/src/pages/posts/[slag].astro";
const $$url = "/posts/[slag]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
