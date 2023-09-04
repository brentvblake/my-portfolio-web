//import { prerendered } from '$service-worker';
import adapter from '@sveltejs/adapter-static';
//import { vitePreprocess } from '@sveltejs/kit/vite';
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		  // default options are shown. On some platforms
		  // these options are set automatically — see below
		  pages: 'build',
		  assets: 'build',
		  fallback: undefined,
		  precompress: false,
		  strict: true
		}),
		paths: {
			base: dev ? '' : '/my-portfolio-web',
		  }
	  }
};

export default config;
