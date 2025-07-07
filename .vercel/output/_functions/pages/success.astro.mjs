import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_SNJoZh84.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-P0Cial.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Success" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="success"> <h1>Successfully sent</h1> <p>Your message has been received.</p> </div> ` })}`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/success/index.astro", void 0);

const $$file = "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/success/index.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
