---
title: "Un suivi administratif efficace pour les écoles et mosquées : fini les oublis grâce aux alertes absences d'Eduroots"
description: "Découvrez comment Eduroots aide les écoles et mosquées à suivre les absences élèves efficacement, grâce à des alertes automatiques et une interface simple."
contents: ["suivi", "absences", "alertes", "administration"]
author: "Xavier Genolhac"
role: "Fondateur d'Eduroots"
authorImage: "@/images/avatars/xavier.webp"
authorImageAlt: "Xavier Genolhac, fondateur d'Eduroots"
pubDate: 2025-01-13
cardImage: "@/images/blog/Laptop_Students_Often_Missed.webp"
cardImageAlt: "Interface de suivi des absences Eduroots"
readTime: 2
tags:
  - suivi élèves
  - gestion des absences
  - alertes absences
  - présence
---

# Un élève absent plusieurs fois... et personne ne s'en rend compte

Dans de nombreuses écoles associatives ou mosquées, le suivi administratif repose encore sur des feuilles volantes ou des fichiers Excel qui finissent par s'embrouiller. Résultat : des absences répétées passent inaperçues, les familles ne sont pas alertées à temps, et certains élèves décrochent.

C'est ce que nous vivions à la mosquée de Colomiers, où je suis bénévole. Un élève manquait régulièrement les cours, mais personne ne faisait le lien, faute d'un outil de suivi automatisé.

## Eduroots détecte les absences critiques, automatiquement

C'est pour répondre à cette réalité que j'ai intégré à Eduroots, notre plateforme open source de gestion d'école, un système d'alertes absences en temps réel.

- L'interface affiche clairement les élèves avec 3, 6 ou 9 absences.
- L'administration reçoit un signal visuel dès qu'un seuil est franchi.

Ce sont des petits détails qui font une énorme différence pour éviter le décrochage et renforcer l'accompagnement.

## Une anecdote technique… et humaine

Quand j'ai développé cette fonctionnalité, j'ai d'abord fait une erreur classique : l'alerte s'activait à chaque absence, même pour les élèves déjà signalés. Résultat : 12 notifications pour le même cas 😅

J'ai dû revoir toute la logique dans la base MongoDB pour que l'alerte ne se déclenche qu'aux bons moments. Après quelques nuits blanches (et beaucoup de café), le système est aujourd'hui parfaitement fluide.

## Moins de stress, plus d'accompagnement

Depuis la mise en place d'Eduroots à Colomiers :

- Deux élèves en risque de décrochage ont été identifiés après 6 absences.
- L'administration a réagi rapidement via la messagerie interne.
- Les familles ont été rassurées, et les élèves mieux accompagnés.

C'est ça, l'impact concret d'un outil éducatif pensé pour les réalités du terrain.
