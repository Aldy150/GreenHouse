# GreenHaven Properties

Crée un site web moderne, élégant et responsive pour une agence immobilière.

L’objectif est de créer une template de base professionnelle, facilement personnalisable par la suite. Le design doit inspirer confiance, sérieux, modernité et haut de gamme, sans être trop chargé.

Stack technique

Next.js avec App Router

TypeScript

Tailwind CSS

Composants réutilisables

Design responsive Mobile / Tablet / Desktop

Architecture propre et facilement extensible

Utiliser des icônes modernes (Lucide React ou équivalent)

Ne pas utiliser de backend complexe pour cette première version

Les données des biens peuvent être mockées dans des fichiers TypeScript/JSON

Identité visuelle

Utiliser principalement une palette verte et blanche.

Couleurs souhaitées :

Vert principal : #166534

Vert secondaire : #15803D

Vert clair : #DCFCE7

Blanc : #FFFFFF

Gris très clair pour les backgrounds : #F8FAFC

Gris foncé pour les textes : #1E293B

Le vert doit être utilisé avec modération pour conserver un aspect premium.

Style général :

Minimaliste

Moderne

Premium mais accessible

Beaucoup d'espace blanc

Coins légèrement arrondis

Ombres très légères

Typographie élégante et lisible

Animations discrètes au hover

Aucun effet visuel excessif

Structure du site

Créer les pages suivantes :

1. Page d'accueil /

Créer une landing page complète avec les sections suivantes.

Header

Créer une navbar fixe ou sticky avec :

Logo de l'agence à gauche

Liens :

Accueil

Nos biens

À propos

Services

Contact

Bouton principal "Voir nos biens"

Menu hamburger sur mobile

Le logo peut être un logo temporaire composé d'une icône de maison + nom fictif de l'agence.

Nom temporaire :
GreenHome Immobilier

Hero section

Créer une grande section hero avec une belle image immobilière en arrière-plan ou une grande image sur le côté.

Texte :

"Votre prochain chez-vous commence ici."

Sous-titre :

"Découvrez des propriétés sélectionnées avec soin et trouvez le bien qui correspond réellement à votre projet."

Ajouter deux boutons :

"Voir les propriétés"

"Nous contacter"

Ajouter également une barre de recherche immobilière moderne avec :

Type de transaction : Acheter / Louer

Localisation

Type de bien

Budget

Bouton "Rechercher"

La recherche doit avoir un design moderne ressemblant aux plateformes immobilières professionnelles.

Section statistiques

Afficher 4 statistiques :

500+ Biens disponibles

12+ Années d'expérience

1 200+ Clients satisfaits

25 Experts immobiliers

Utiliser des chiffres bien visibles et un design sobre.

Section "Nos biens sélectionnés"

Créer une grille de cartes immobilières.

Afficher 6 biens fictifs.

Chaque carte doit contenir :

Image du bien

Badge "À vendre" ou "À louer"

Prix

Titre du bien

Localisation

Nombre de chambres

Nombre de salles de bain

Surface en m²

Bouton ou lien "Voir le bien"

Icône cœur pour ajouter aux favoris

Exemples :

Villa moderne avec piscine

Appartement lumineux en centre-ville

Maison familiale avec jardin

Penthouse avec vue panoramique

Appartement moderne 3 chambres

Maison contemporaine

Les images doivent être de belles photos immobilières libres d'utilisation ou utiliser des placeholders si nécessaire.

Section "Pourquoi nous choisir ?"

Créer 4 cartes :

Expertise locale
"Une connaissance approfondie du marché immobilier local."

Biens sélectionnés
"Des propriétés choisies selon des critères de qualité stricts."

Accompagnement personnalisé
"Un conseiller dédié pour vous accompagner à chaque étape."

Transparence
"Des informations claires et un processus immobilier sans mauvaises surprises."

Utiliser des icônes Lucide.

Section "Comment ça marche ?"

Présenter un processus en 3 ou 4 étapes :

Définissez votre projet

Trouvez votre bien

Visitez la propriété

Finalisez votre projet

Créer une présentation visuelle simple avec numéros et icônes.

Section témoignages

Créer 3 témoignages fictifs de clients.

Chaque témoignage doit avoir :

Avatar placeholder

Nom

Ville

Note 5 étoiles

Commentaire

Exemple :

"GreenHome nous a accompagnés du début à la fin. Nous avons trouvé notre maison en quelques semaines seulement."

Section CTA

Créer une grande section verte avec du texte blanc.

Titre :

"Prêt à trouver votre prochain bien ?"

Sous-titre :

"Parlons de votre projet immobilier et trouvons ensemble la propriété qui vous correspond."

Boutons :

"Trouver un bien"

"Prendre contact"

Footer

Créer un footer professionnel avec :

Logo

Description courte

Navigation

Services

Contact

Adresse

Téléphone

Email

Réseaux sociaux

Copyright

2. Page /properties

Créer une page dédiée à tous les biens immobiliers.

Header avec :

"Nos propriétés"

Sous-titre :

"Explorez notre sélection de biens disponibles à la vente et à la location."

Créer une interface avec :

Barre de filtres

Filtres :

Acheter / Louer

Localisation

Type de propriété

Prix minimum

Prix maximum

Nombre de chambres

Surface minimum

Bouton "Appliquer les filtres"

Bouton "Réinitialiser"

Grille des propriétés

Afficher les cartes immobilières dans une grille responsive :

Desktop : 3 colonnes
Tablet : 2 colonnes
Mobile : 1 colonne

Ajouter une pagination en bas.

3. Page /properties/[id]

Créer une page détail d'un bien.

Afficher :

Galerie photos

Image principale

Miniatures

Badge "À vendre"

Prix

Nom du bien

Localisation

Surface

Chambres

Salles de bain

Description détaillée

Liste des caractéristiques

Équipements

Carte placeholder pour la localisation

Informations sur l'agent immobilier

Créer également un formulaire :

"Intéressé par ce bien ?"

Champs :

Nom

Email

Téléphone

Message

Bouton :

"Demander une visite"

Ajouter un bouton "Ajouter aux favoris".

4. Page /about

Créer une page "À propos".

Sections :

Notre histoire

Présenter GreenHome Immobilier comme une agence moderne spécialisée dans l'accompagnement des acheteurs, vendeurs, propriétaires et investisseurs.

Notre mission

"Rendre l'immobilier plus simple, plus transparent et plus humain."

Nos valeurs

Confiance

Transparence

Excellence

Proximité

Notre équipe

Créer 4 cartes d'agents immobiliers avec :

Photo

Nom

Fonction

Spécialité

Bouton/contact

5. Page /services

Créer une page présentant les services :

Achat immobilier

Vente immobilière

Location

Gestion locative

Estimation immobilière

Conseil en investissement

Chaque service doit avoir :

Une icône

Un titre

Une description

Un bouton "En savoir plus"

6. Page /contact

Créer une page de contact professionnelle.

Afficher deux colonnes sur desktop :

Informations

Adresse

Téléphone

Email

Horaires d'ouverture

Formulaire

Champs :

Nom complet

Email

Téléphone

Sujet

Type de projet

Message

Bouton :

"Envoyer ma demande"

Ajouter une carte placeholder sous les informations.

Composants réutilisables

Créer des composants propres et réutilisables :

Navbar

Footer

PropertyCard

PropertyGrid

SearchBar

FilterPanel

AgentCard

TestimonialCard

Button

Badge

ContactForm

PropertyGallery

StatsSection

SectionHeading

CTASection

Organiser correctement les composants afin que le projet soit facilement maintenable.

Responsive design

Le site doit être parfaitement responsive.

Mobile :

Navbar avec menu hamburger

Cartes en une colonne

Formulaires en une colonne

Hero adapté aux petits écrans

Boutons facilement cliquables

Tablet :

2 colonnes pour les propriétés

Desktop :

3 colonnes pour les propriétés

Navigation horizontale

Hero large

Sections aérées

UX/UI

Ajouter de petites interactions :

Hover sur les cartes

Hover sur les boutons

Transition douce

Animation légère lors de l'apparition des sections

Bouton favori avec état actif/inactif

États loading/empty pour les propriétés

Ne pas utiliser d'animations lourdes.

SEO

Ajouter une structure SEO de base :

Metadata pour chaque page

Titres H1/H2/H3 correctement structurés

Alt text pour les images

URLs propres

Open Graph metadata de base

Données

Créer un jeu de données fictif avec au minimum 12 propriétés.

Chaque propriété doit avoir :

{
  id,
  title,
  type,
  transactionType,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  images,
  description,
  features,
  agent
}


Utiliser ces données pour alimenter les différentes pages.

Important

Je veux avant tout une template élégante et professionnelle, pas une application immobilière complexe.

Ne pas ajouter :

Dashboard administrateur

Authentification

Paiement

Backend complexe

Système de réservation réel

Base de données réelle

Tout doit fonctionner avec des données mockées pour cette première version.

Le résultat doit donner l'impression d'un vrai site d'agence immobilière premium, avec une identité visuelle verte et blanche, tout en gardant une architecture Next.js + Tailwind CSS propre et facilement extensible.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://greenkey-properties.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73151932-b56e-4f3d-8149-15a669094416).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
