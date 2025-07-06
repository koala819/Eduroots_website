import ogImageSrc from "@images/eduroots-og-image.jpg";


export const SITE = {
  title: "Eduroots",
  tagline: "Plateforme de gestion scolaire open source",
  description: "Eduroots est une plateforme de gestion scolaire open source qui simplifie la vie des enseignants, parents et administrateurs. Gestion des élèves, communication, planning et bien plus encore.",
  description_short: "Plateforme de gestion scolaire open source qui simplifie la vie des écoles.",
  url: "https://eduroots.org",
  author: "Xavier Genolhac",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Plateforme de gestion scolaire open source`,
  description: "Simplifiez la gestion de votre école avec Eduroots. Plateforme open source pour le suivi des élèves, la communication avec les parents, la gestion des absences et des plannings. Essai gratuit 7 jours.",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: `<img
            src="/mosquees/al-ihsane.jpg"
            alt="Mosquée Al-Ihsane"
            class="mx-auto py-3 sm:mx-0 lg:py-5 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300 dark:hidden"
            style="object-fit: contain; height: 240px; width: auto; mix-blend-mode: multiply;"
        />
        <img
            src="/mosquees/al-ihsane-dark.jpg"
            alt="Mosquée Al-Ihsane"
            class="mx-auto py-3 sm:mx-0 lg:py-5"
            style="object-fit: contain; height: 240px; width: auto; mix-blend-mode: screen;"
        />`,
        name: "Mosquée Al-Ihsane",
        href: "#",
    },

]
