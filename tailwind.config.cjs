/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: "#111111",
				light: "#FFFFFF",
				blue: "#33d2ff",
				gray: "#C4C4C4",
				"dark-gray": "#1A1A1A",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	},
};
