export default {
	async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const hostname = request.hostname;
        const pathname = url.pathname;
        const method = request.method;

		return new Response('hi', {
			headers: {
				'Content-Type': 'text/html'
			},
		});
	},
};
