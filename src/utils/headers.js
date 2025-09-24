export const commonHeaders = {
	'Content-Security-Policy': `default-src 'self'; style-src 'self' 'unsafe-inline' 'nonce-mainjs'`,
	'Strict-Transport-Policy': 'max-age=63072000; preload',
    'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
	'Referrer-Policy': 'no-referrer-when-downgrade',
	'Cache-Control': 'public, max-age=31536000',
	'ETag': 'some-hash'
}