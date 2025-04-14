import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, g as renderComponent } from '../chunks/astro/server_CX6URkQj.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar } from '../chunks/Layout_DCMRPPJk.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const blocarLogo = new Proxy({"src":"/_astro/blocar-logo-only-car.CSkjncj0.png","width":1280,"height":245,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/assets/images/blocar-logo-only-car.png";
							}
							
							return target[name];
						}
					});

const background = new Proxy({"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/assets/background.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-mmc7otgs> <img id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high" data-astro-cid-mmc7otgs> <main data-astro-cid-mmc7otgs> <section id="hero" data-astro-cid-mmc7otgs> <a href="https://astro.build" data-astro-cid-mmc7otgs><img${addAttribute(blocarLogo.src, "src")} height="48" alt="Astro Homepage" data-astro-cid-mmc7otgs></a> <h1 data-astro-cid-mmc7otgs>
Welcome to the car blog.
</h1> <section id="links" data-astro-cid-mmc7otgs> <a class="button" href="/blog" data-astro-cid-mmc7otgs>Go see car blog</a> </section> </section> </main> </div> `;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/components/Welcome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/pages/index.astro", void 0);

const $$file = "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
