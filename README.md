# GreenHouse

> **Une expérience immobilière moderne, élégante et humaine.**

GreenHouse est un site web vitrine pour une agence immobilière moderne, conçu pour présenter des biens immobiliers, faciliter la recherche de propriétés et offrir une expérience utilisateur claire, premium et responsive.

Le projet a été pensé comme une base facilement personnalisable et extensible, avec des données fictives pour la première version.

---

## Aperçu

GreenHouse propose une expérience immobilière moderne avec une présentation des biens immobiliers, une recherche et un filtrage des propriétés, un système de favoris côté interface, des pages détaillées pour chaque propriété, une présentation des agents immobiliers, des témoignages clients, un formulaire de contact, un design entièrement responsive, une identité visuelle verte et blanche ainsi qu'une interface rapide et moderne.

L'objectif est de proposer une expérience inspirée des plateformes immobilières modernes tout en conservant une identité visuelle propre à GreenHouse.

---

## Identité visuelle

GreenHouse utilise une palette principalement basée sur le vert et le blanc.

| Couleur         | Valeur    | Utilisation                    |
| --------------- | --------- | ------------------------------ |
| Vert principal  | `#166534` | Boutons et éléments principaux |
| Vert secondaire | `#15803D` | Accents et interactions        |
| Vert clair      | `#DCFCE7` | Badges et backgrounds          |
| Blanc           | `#FFFFFF` | Background principal           |
| Gris clair      | `#F8FAFC` | Sections secondaires           |
| Gris foncé      | `#1E293B` | Texte principal                |

### Direction artistique

Le design recherché est minimaliste, élégant, premium, moderne, accessible, aéré et professionnel.

Les animations restent volontairement discrètes afin de conserver une expérience fluide et professionnelle.

---

## Technologies

Le projet utilise actuellement React 19, TypeScript, Vite, TanStack Start, TanStack Router, TanStack Query, Tailwind CSS, Lucide React, React Hook Form et Zod.

### Pourquoi cette stack ?

La stack actuelle permet de construire une application React moderne, rapide et facilement maintenable tout en conservant une architecture suffisamment flexible pour ajouter plus tard une API ou une base de données.

---

## Structure du projet

L'organisation du projet est pensée autour de composants réutilisables et de routes indépendantes.

```text
GreenHouse/
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyGrid.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── AgentCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── PropertyGallery.tsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── properties.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── properties/
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   └── contact.tsx
│   │
│   ├── lib/
│   │   └── ...
│   │
│   ├── styles.css
│   └── ...
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

La structure exacte peut évoluer au fur et à mesure du développement.

---

## Pages

### Accueil

La page d'accueil présente GreenHouse et son offre immobilière.

### Hero

> **Votre prochain chez-vous commence ici.**

La section Hero présente une image immobilière forte, une présentation de GreenHouse, un bouton vers les propriétés, un bouton de contact et une recherche immobilière.

### Recherche immobilière

La recherche permet de sélectionner le type de transaction, la localisation, le type de bien et le budget.

---

## Statistiques

La page d'accueil présente quelques chiffres clés.

**500+** biens disponibles

**12+** années d'expérience

**1 200+** clients satisfaits

**25** experts immobiliers

Ces chiffres sont actuellement fictifs et pourront être remplacés par des données réelles.

---

## Propriétés sélectionnées

Une sélection de biens est présentée sous forme de cartes.

Chaque propriété contient une photo, le type de transaction, le prix, le nom du bien, la localisation, la surface, le nombre de chambres, le nombre de salles de bain, le système de favoris et un lien vers la fiche détaillée.

---

## Page des propriétés

Route :

```text
/properties
```

Cette page permet d'explorer l'ensemble des biens disponibles.

### Filtres

La page propose des filtres pour l'achat ou la location, la localisation, le type de propriété, le prix minimum, le prix maximum, le nombre de chambres et la surface minimum.

Les propriétés sont affichées dans une grille responsive.

```text
Desktop : 3 colonnes
Tablet  : 2 colonnes
Mobile  : 1 colonne
```

---

## Détail d'une propriété

Route :

```text
/properties/:id
```

Chaque propriété possède une page détaillée comprenant une galerie photos, une image principale, des miniatures, le prix, la localisation, la surface, le nombre de chambres, le nombre de salles de bain, la description, les caractéristiques, les équipements, la localisation, l'agent immobilier et un formulaire de demande de visite.

Exemple :

```text
/properties/villa-moderne-piscine
```

---

## À propos

Route :

```text
/about
```

Cette page présente l'histoire de GreenHouse, la mission de l'agence, ses valeurs et son équipe.

### Mission

> **Rendre l'immobilier plus simple, plus transparent et plus humain.**

### Valeurs

Confiance

Transparence

Excellence

Proximité

---

## Services

Route :

```text
/services
```

Les services présentés comprennent l'achat immobilier, la vente immobilière, la location, la gestion locative, l'estimation immobilière et le conseil en investissement.

---

## Contact

Route :

```text
/contact
```

La page de contact comprend les informations de l'agence ainsi qu'un formulaire.

### Informations

Adresse

Téléphone

Email

Horaires d'ouverture

### Formulaire

Nom complet

Email

Téléphone

Sujet

Type de projet

Message

Les formulaires sont actuellement uniquement destinés à l'interface et ne sont pas connectés à un backend.

---

## Composants

Le projet privilégie les composants réutilisables.

Les principaux composants sont :

```text
Navbar
Footer
PropertyCard
PropertyGrid
SearchBar
FilterPanel
AgentCard
TestimonialCard
ContactForm
PropertyGallery
StatsSection
SectionHeading
CTASection
```

Cette approche permet de modifier facilement l'apparence ou le comportement d'un élément sans dupliquer le code.

---

## Données

La première version utilise des données mockées.

Une propriété suit une structure similaire à :

```ts
{
  id: string;
  title: string;
  type: string;
  transactionType: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    role: string;
    image: string;
  };
}
```

Au minimum, 12 propriétés fictives sont utilisées pour alimenter l'interface.

À terme, ces données pourront être remplacées par une API ou une base de données.

---

## Responsive Design

GreenHouse est conçu selon une approche Mobile First.

### Mobile

Le site utilise un menu hamburger, une colonne pour les propriétés, des formulaires empilés, un Hero adapté aux petits écrans et des boutons facilement accessibles.

### Tablet

Le site utilise deux colonnes pour les propriétés et une navigation adaptée.

### Desktop

Le site utilise une navigation complète, trois colonnes pour les propriétés, un Hero large, des sections aérées et des grilles plus riches.

---

## UX et interactions

L'interface utilise des interactions légères avec des effets au survol des cartes, des transitions douces, des états actifs pour les boutons, un système de favoris, des retours visuels, des états de chargement et des états vides.

Les animations sont volontairement limitées afin de préserver les performances et l'élégance du site.

---

## SEO

Une attention particulière est portée à la structure SEO avec des metadata par page, des titres H1, H2 et H3 cohérents, des descriptions, des textes alternatifs pour les images, des URLs propres, Open Graph et une structure HTML sémantique.

---

## Installation

### Prérequis

Le projet nécessite Node.js et npm.

Vérifier les versions installées :

```bash
node -v
npm -v
```

### Installation du projet

Cloner le projet :

```bash
git clone <repository-url>
```

Entrer dans le dossier :

```bash
cd GreenHouse
```

Installer les dépendances :

```bash
npm install
```

---

## Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Vite affichera une adresse locale similaire à :

```text
http://localhost:5173/
```

Ouvrir cette adresse dans le navigateur.

### Autres commandes

Linter le projet :

```bash
npm run lint
```

Formater le code :

```bash
npm run format
```

Créer une version de production :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

---

## Architecture

GreenHouse est actuellement une application React basée sur TanStack Start et Vite.

L'architecture est volontairement simple afin de permettre une évolution progressive.

### Version actuelle

```text
Frontend
   |
   ├── React
   ├── TanStack Start
   ├── TanStack Router
   ├── Tailwind CSS
   └── Mock Data
```

### Évolution possible

À terme, l'architecture pourra évoluer vers :

```text
Frontend
   |
   ├── React / TanStack Start
   |
   ├── API
   |
   ├── Base de données
   |
   ├── Authentification
   |
   └── Administration
```

Ces fonctionnalités ne font volontairement pas partie de la première version.

---

## Hors périmètre actuel

La version actuelle ne comprend pas de dashboard administrateur, d'authentification, de paiements, de base de données réelle, de backend immobilier, de réservation réelle de visites, de gestion réelle des utilisateurs, de CRM ou de système de messagerie.

L'objectif actuel est de construire une base frontend solide, élégante et professionnelle.

---

## Roadmap

### Phase 1 : Interface

Configuration du projet

Design system

Navbar

Hero

Recherche immobilière

Cartes de propriétés

Page propriétés

Page détail

Page à propos

Page services

Page contact

Responsive design

### Phase 2 : Expérience utilisateur

Recherche fonctionnelle

Filtres fonctionnels

Favoris

Pagination

Animations

Optimisation des images

SEO avancé

### Phase 3 : Backend

API immobilière

Base de données

Gestion des propriétés

Gestion des agents

Formulaires connectés

Authentification

### Phase 4 : Administration

Dashboard

Création de propriétés

Modification des propriétés

Suppression des propriétés

Gestion des demandes clients

Gestion des agents

---

## Objectif du projet

GreenHouse a pour ambition de devenir une plateforme immobilière moderne permettant de trouver, découvrir, acheter ou louer un bien immobilier avec une expérience simple, transparente et élégante.

Le projet commence volontairement par une interface frontend de qualité afin de construire une base solide avant l'intégration de fonctionnalités backend.

---

## Licence

Projet privé : GreenHouse Immobilier.

---

**GreenHouse : Votre prochain chez-vous commence ici.**
