import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: ["/"]
		},
	},
	extensions: [
		".svelte", ".svmd", ".md"
	],
	preprocess: mdsvex({
		extensions: [".md"]
	}),
	onwarn: (warning, handler) => {
		// suppress warnings on `vite dev` and `vite build`; but even without this, things still work
		if (warning.code === "a11y-media-has-caption") return;
		handler(warning);
	},
	kit: { adapter: adapter() },

};

export default config;
