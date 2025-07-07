import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_SNJoZh84.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Error 404</h1>`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/404.astro", void 0);

const $$file = "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
