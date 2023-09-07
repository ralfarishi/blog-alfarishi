// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Ramiza Al Farishi | Personal Blog",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://blog.alfarishi.my.id",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ralfarishi", // Usually your GitHub org/user name.
	projectName: "ralfarishi blog", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			// image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Home",
				logo: {
					alt: "My Blog Logo",
					src: "img/test.png",
				},
				items: [
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/ralfarishi/blog-alfarishi",
						label: "GitHub",
						position: "right",
					},
				],
			},

			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ["php", "dot", "powershell", "visual-basic"],
			},

			metadata: [
				{
					name: "robots",
					content: "index,follow",
				},
			],
		}),
};

module.exports = config;
