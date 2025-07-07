import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_SNJoZh84.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-P0Cial.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alberte Vieites" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="landing"> <div class="landing__top"> <span>CRAFTING CODE</span> <span>INTO STORIES</span> </div> <div class="landing__middle"> <span>CREATIVE CODE</span> <span>DATA DECODING</span> </div> <div class="landing__bottom"> <span>REVEAL HIDDEN</span> <span>DATA STORIES</span> </div> </div> ` })}`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/index.astro", void 0);

const $$file = "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
