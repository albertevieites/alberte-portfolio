import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_vCqUo7IR.mjs';
import { manifest } from './manifest_BMosFLVn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/projects/_slug_.astro.mjs');
const _page5 = () => import('./pages/success.astro.mjs');
const _page6 = () => import('./pages/work.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/index.astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/projects/[slug].astro", _page4],
    ["src/pages/success/index.astro", _page5],
    ["src/pages/work/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "da16f370-b317-4a07-b6b7-a82f74545c53",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
