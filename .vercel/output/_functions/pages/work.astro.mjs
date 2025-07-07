import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_SNJoZh84.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B-P0Cial.mjs';
import 'clsx';
import { W as WebProjects, D as DataProjects } from '../chunks/data_projects_DNZAHdu3.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.albertevieites.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, description, github, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card"> <div class="card__title"> <h2>${name}</h2> <p>${description}</p> </div> <div class="card__github"> <a${addAttribute(github, "href")}> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__github" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="hsl(34, 100%, 97%)" fill="none" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg> </a> </div> <div class="card__details"> <a${addAttribute(link, "href")}> <svg class="icon icon__details" fill="hsl(34, 100%, 97%)" width="15" height="15" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"> <path d="M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z"></path> </svg> <span>Details of the project</span> </a> </div> </div>`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/components/Card.astro", void 0);

const $$Web = createComponent(($$result, $$props, $$slots) => {
  const sortedWebProjects = WebProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return renderTemplate`${maybeRenderHead()}<div class="web"> <div class="web__title"> <h4>web development</h4> </div> ${sortedWebProjects.map((project) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "name": project.name, "github": project.github, "description": project.description, "link": `/projects/${project.slug}` })}`)} </div>`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/components/Work/Web.astro", void 0);

const $$Data = createComponent(($$result, $$props, $$slots) => {
  const sortedDataProjects = DataProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return renderTemplate`${maybeRenderHead()}<div class="data"> <div class="data__title"> <h4>data</h4> </div> ${sortedDataProjects.map((project) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "name": project.name, "description": project.description, "github": project.github, "link": `/projects/${project.slug}` })}`)} </div>`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/components/Work/Data.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Work" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="work__container"> ${renderComponent($$result2, "Data", $$Data, {})} ${renderComponent($$result2, "Web", $$Web, {})} </div> ` })}`;
}, "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/work/index.astro", void 0);

const $$file = "E:/DEVELOPMENT/Web Development/alberte-portfolio/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
