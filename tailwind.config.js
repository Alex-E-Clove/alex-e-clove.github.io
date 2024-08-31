import plugin from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'node_modules/preline/dist/*.js'],
	theme: {
		extend: {}
	},
	plugins: [plugin]
};
