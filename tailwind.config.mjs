/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive', 'system-ui'],
			},
            colors: {
                'arcade-dark': '#1a1a2e',
                'arcade-purple': '#16213e',
                'arcade-pink': '#e94560',
                'arcade-blue': '#0f3460'
            }
		},
	},
	plugins: [],
}
