// tailwind.config.cjs

module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
	],
	darkMode: 'class', // Enable dark mode using the 'class' strategy
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],
		},
		colors: {
		  primary: '#6366F1', // Indigo-500
		  'primary-dark': '#4F46E5', // Indigo-600
		  background: '#F3F4F6', // Gray-100
		},
	  },
	},
	plugins: [],
  };
  