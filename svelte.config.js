import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	
	preprocess: [mdsvex(mdsvexConfig)],

	kit: {
		target: '#svelte',
		adapter: adapter(),



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
