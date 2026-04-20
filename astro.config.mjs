// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mohankumargupta.github.io',
	base: '/tinkercad',
	integrations: [
		starlight({
			title: 'Tinkercad Tutorial',
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro'
			},
			customCss: ['/src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mohankumargupta/tinkercad' }],
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Fundamentals',
					autogenerate: { directory: 'fundamentals' },
				},				
			],
		}),
	],
});
