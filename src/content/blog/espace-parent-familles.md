---
title: "Donner de la visibilité aux familles : retour sur l'espace parent d'EduRoots"
description: "Comment un espace parent simple et fluide améliore la communication entre familles, enseignants et administration dans les écoles et associations."
contents: ["espace parent", "familles", "visibilité", "communication"]
author: "Xavier Genolhac"
role: "Fondateur d'Eduroots"
authorImage: "@/images/avatars/xavier.webp"
authorImageAlt: "Xavier Genolhac, fondateur d'Eduroots"
pubDate: 2025-01-20
cardImage: "@/images/blog/Smartphone_Messagerie.webp"
cardImageAlt: "Interface espace parent Eduroots sur mobile"
readTime: 3
tags:
  [
    "espace parent",
    "familles",
    "notes élèves",
    "absences",
    "communication école",
    "Eduroots",
  ]
---

# Donner de la visibilité aux familles : retour sur l'espace parent d'EduRoots

A la mosquée de Colomiers, la communication avec les familles était un vrai défi. Un rendez-vous manqué, un cahier oublié… et les infos sur les notes ou le comportement disparaissaient. Résultat : frustration des parents, surcharge du bureau administratif, et parfois même des incompréhensions avec les enseignants.

C'est en repensant à ces situations que j'ai voulu renforcer **l'aspect "famille"** dans Eduroots.

## Un espace pensé pour les familles, pas pour les technophiles

J'ai conçu un espace simple, accessible depuis n'importe quel téléphone, tablette ou ordinateur. Dès la connexion, les parents peuvent :

- Consulter les **notes et absences** de leurs enfants
- Voir le **comportement** sous forme d'étoiles
- Accéder à une **fiche complète** par élève
- Contacter un professeur ou l'administration si besoin

Le tout sans avoir à chercher dans dix menus. L'idée : **une expérience claire, fluide et rassurante.**

## Une petite demande qui change tout

Au début, je pensais que les parents n'auraient jamais besoin de modifier les infos élèves. Erreur : deux jours après le lancement, une maman m'écrit pour dire que le numéro de téléphone est erroné… et qu'elle ne peut pas le corriger.

J'ai ajouté une option : un clic pour envoyer une demande de modification au bureau. Ça paraît anodin, mais **c'est ce genre de détail qui rend une application vraiment utile**.

## Les coulisses techniques

Sous le capot, j'utilise **Next.js** pour la rapidité et **MongoDB** pour assurer que les données restent à jour. Un vrai défi a été la **synchronisation des infos en temps réel**, surtout sur les smartphones anciens. J'ai fini par implémenter un système de _refresh silencieux_ : dès qu'une donnée est mise à jour par un admin, elle apparaît aussi chez les parents, sans action manuelle.

## Conclusion : la simplicité au service de l'impact

Eduroots n'a pas vocation à tout révolutionner, mais à **répondre aux vrais besoins du terrain**, dans des écoles, associations ou mosquées où les outils institutionnels manquent.

Si vous cherchez une solution simple pour **renforcer la relation école-familles**, je peux vous proposer une démo d'Eduroots. L'objectif : remettre l'humain au centre, avec un outil qui reste discret, mais puissant.
