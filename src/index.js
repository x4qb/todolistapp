import index from '../public/index.html';
import { commonHeaders } from './utils/headers.js';

export default {
	async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const hostname = request.hostname;
        const pathname = url.pathname;
        const method = request.method;

		return new Response(index, {
			status: 200,
			headers: {
				...commonHeaders,
				'Theme-Color': '#c6c5c4',
				'Content-Type': 'text/html'
			}
		})
	},
};
