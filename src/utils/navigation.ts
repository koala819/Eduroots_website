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
      { name: "Gestion des élèves", url: "/#features" },
      { name: "Communication", url: "/#features" },
      { name: "Tableaux de bord", url: "/#features" },
      { name: "Tarifs", url: "/tarifs" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos d'Eduroots", url: "#" },
      { name: "Mentions légales", url: "/mentions-legales" },
      { name: "RGPD", url: "/rgpd" },
      { name: "CGV", url: "/cgv" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/eduroots/eduroots",
  linkedin: "#",
  youtube: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
