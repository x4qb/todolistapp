import index from '../public/index.html';

export default {
	async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const hostname = request.hostname;
        const pathname = url.pathname;
        const method = request.method;

		return new Response(index, {
			status: 200,
			headers: {
				'Content-Security-Policy': `default-src 'self';`,
				'Strict-Transport-Policy': 'max-age=63072000; preload',
				'Cross-Origin-Resource-Policy': 'same-origin',
				'Cross-Origin-Embedder-Policy': 'require-corp',
				'Cross-Origin-Opener-Policy': 'same-origin',
				'Referrer-Policy': 'no-referrer-when-downgrade',
				'Cache-Control': 'public, max-age=31536000',
				'ETag': 'some-hash',
				'Theme-Color': '#c6c5c4'
			}
		})
	},
};
