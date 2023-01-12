/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				ink: {
					DEFAULT: '#000',
					dark: '#fff'
				},
				paper: {
					DEFAULT: '#fff',
					dark: '#000'
				}
			}
		}
	},
	plugins: []
};
