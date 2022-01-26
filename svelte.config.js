import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig)],

	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'public',
			assets: 'public'
		}),

		// if you are not using the static adapter and
		// you don't want prerendering, remove this section
		prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml']
		},

		vite: {
			// allows vite access to ./posts
			server: {
				fs: {
					allow: ['./']
				}
			}
		}
	}
};

export default config;

// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],

// 	kit: {
// 		adapter: adapter(),

// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	},

// 	preprocess: [mdsvex(mdsvexConfig)]
// };

// export default config;
