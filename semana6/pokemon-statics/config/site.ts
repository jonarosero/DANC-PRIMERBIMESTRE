export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Pokemon",
	description: "Ten una hermoso viaje",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Kanto",
      href: "/kanto",
    },
    {
      label: "Johto",
      href: "/jotho",
    },
    {
      label: "Hoenn",
      href: "/hoenn",
    },

	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Kanto",
      href: "/kanto",
    },
    {
      label: "Johto",
      href: "/jotho",
    },
    {
      label: "Hoenn",
      href: "/hoenn",
    },
	{
		label: "Cerrar Sesión",
		
	  },
	],
	links: {
		github: "https://github.com/jonarosero",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    
	},
};
