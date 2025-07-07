// An array of links for navigation bar
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Tarifs", url: "/tarifs" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Plateforme",
    links: [
      { name: "Accueil", url: "/" },
      { name: "Tarifs", url: "/tarifs" },
      { name: "Blog", url: "/blog" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "Qui suis-je ?", url: "/#qui-suis-je" },
      { name: "Mentions légales", url: "/mentions-legales" },
      { name: "RGPD", url: "/rgpd" },
      { name: "CGV", url: "/cgv" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  github: "https://github.com/eduroots/eduroots",
  linkedin: "https://linkedin.com/in/xavier-genolhac",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
