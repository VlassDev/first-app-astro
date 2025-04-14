import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderHead, e as renderSlot, f as renderScript } from './astro/server_CX6URkQj.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const blocarLogo = new Proxy({"src":"/_astro/blocar-logo.ClyUt-_c.png","width":928,"height":336,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/assets/images/blocar-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg shadow-sm" data-astro-cid-5blmo7yk> <div class="px-5 container-fluid" data-astro-cid-5blmo7yk> <a class="navbar-brand" href="/" data-astro-cid-5blmo7yk> <img${addAttribute(blocarLogo.src, "src")} width="115" height="48" alt="Astro Homepage" data-astro-cid-5blmo7yk> </a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-5blmo7yk> <span class="navbar-toggler-icon" data-astro-cid-5blmo7yk></span> </button> <div class="collapse navbar-collapse" id="navbarText" data-astro-cid-5blmo7yk> <div class="navbar-nav me-auto mb-2 mb-lg-0" data-astro-cid-5blmo7yk></div> <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4" data-astro-cid-5blmo7yk> <li class="nav-item" data-astro-cid-5blmo7yk> <a${addAttribute(`nav-link ${currentPath === "/" ? "active" : ""}`, "class")} href="/" data-astro-cid-5blmo7yk>Home</a> </li> <li class="nav-item" data-astro-cid-5blmo7yk> <a${addAttribute(`nav-link ${currentPath === "/blog" ? "active" : ""}`, "class")} href="/blog" data-astro-cid-5blmo7yk>Blog</a> </li> <li class="nav-item" data-astro-cid-5blmo7yk> <a${addAttribute(`nav-link ${currentPath === "/about" ? "active" : ""} ${"disabled" }`, "class")}${addAttribute("#" , "href")} data-astro-cid-5blmo7yk>About</a> </li> <li class="nav-item" data-astro-cid-5blmo7yk> <a${addAttribute(`nav-link ${currentPath === "/politics" ? "active" : ""} ${"disabled" }`, "class")}${addAttribute("#" , "href")} data-astro-cid-5blmo7yk>Politics</a> </li> </ul> <div data-astro-cid-5blmo7yk> <button type="button" class="btn btn-outline-secondary" data-astro-cid-5blmo7yk>Log in</button> <button type="button" class="btn btn-secondary" data-astro-cid-5blmo7yk>Register</button> </div> </div> </div> </nav>`;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Navbar as a };
