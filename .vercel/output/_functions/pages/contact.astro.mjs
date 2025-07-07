import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_SNJoZh84.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-P0Cial.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact"> <div class="contact__content"> <span class="contact__title">GOT A PROJECT IN MIND? LET'S DISCUSS.</span> <span class="contact__subtitle">
I'm always looking for problems to solve and new partners to collaborate
				with. Drop me a message to chat.
</span> </div> <a class="contact__email" href="mailto:albertevieites@gmail.com">
albertevieites@gmail.com
</a> <a class="contact__linkedin" href="https://www.linkedin.com/in/albertevieites/">LINKEDIN</a> </div> ` })}`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/contact/index.astro", void 0);

const $$file = "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
