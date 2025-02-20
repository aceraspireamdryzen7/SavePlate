export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "SavePlate",
  description: "A platform for reducing food waste and helping those in need.",
  url: "https://saveplate.vercel.app",
  ogImage: "https://saveplate.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/saveplate",
    github: "https://github.com/saveplate",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Donate",
      href: "/donate",
    },
    {
      title: "Find Food",
      href: "/find-food",
    },
  ],
} 