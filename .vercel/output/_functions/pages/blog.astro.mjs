import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, g as renderComponent } from '../chunks/astro/server_CX6URkQj.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navbar } from '../chunks/Layout_DCMRPPJk.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const blogs = [
	{
		id: 1,
		title: "Top 5 Affordable Family SUVs for 2025",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti quos?",
		author: "Juan Perez",
		date: "2024-04-01",
		image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 2,
		title: "Electric Cars: The Future is Now Driving",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat eos.",
		author: "María López",
		date: "2024-04-05",
		image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 3,
		title: "Classic Car Restoration: Passion and Precision",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tempora est.",
		author: "Carla Tarisa",
		date: "2024-04-01",
		image: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 4,
		title: "Best Road Trip Cars for Adventure Seekers",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, suscipit ut.",
		author: "Lucas Perez",
		date: "2024-04-058",
		image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 5,
		title: "Top 5 Affordable Family SUVs for 2025",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti quos?",
		author: "Juan Perez",
		date: "2024-04-01",
		image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 6,
		title: "Electric Cars: The Future is Now Driving",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quaerat eos.",
		author: "María López",
		date: "2024-04-05",
		image: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 7,
		title: "Classic Car Restoration: Passion and Precision",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tempora est.",
		author: "Carla Tarisa",
		date: "2024-04-01",
		image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	},
	{
		id: 8,
		title: "Best Road Trip Cars for Adventure Seekers",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, suscipit ut.",
		author: "Lucas Perez",
		date: "2024-04-058",
		image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		time: "10min de lectura"
	}
];

const $$BlogList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-35dpazjw> <section class="container py-5" data-astro-cid-35dpazjw> <h2 class="mb-4" data-astro-cid-35dpazjw>New Blogs</h2> <div class="row" data-astro-cid-35dpazjw> ${blogs.map((blog) => renderTemplate`<div class="col-md-6 col-lg-3 mb-4" data-astro-cid-35dpazjw> <div class="rounded h-100" data-astro-cid-35dpazjw> <img${addAttribute(blog.image, "src")} class="card-img-top rounded"${addAttribute(blog.title, "alt")} data-astro-cid-35dpazjw> <div class="card-body" data-astro-cid-35dpazjw> <div class="mt-2 mb-2 d-flex flex-row justify-content-between" style="font-size: 14px; color: gray" data-astro-cid-35dpazjw> <strong data-astro-cid-35dpazjw>${blog.date}</strong> <p data-astro-cid-35dpazjw>${blog.time}</p> </div> <h5 class="card-title" data-astro-cid-35dpazjw>${blog.title}</h5> <p class="mt-2 card-text text-secondary" data-astro-cid-35dpazjw>${blog.description}</p> </div> <div class="card-footer d-flex flex-row justify-content-start mt-2" data-astro-cid-35dpazjw> <p data-astro-cid-35dpazjw> Publicado por ${blog.author} </p> </div> </div> </div>`)} </div> </section></div>`;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/components/BlogList.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "BlogList", $$BlogList, {})} ` })}`;
}, "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/pages/blog.astro", void 0);

const $$file = "/Users/vladimirsarmiento/Documents/Proyectos/Primer-Paso-Astro/first-app-astro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
