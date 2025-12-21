# Portfolio Personnel - Pape Magatte Ndiaye DIENE

Ce projet est un portfolio moderne, interactif et responsive développé avec **React**, **Tailwind CSS** et **Framer Motion**. Il présente le parcours, les compétences, l'expérience et les projets de Pape Magatte Ndiaye DIENE.

## 🚀 Technologies Utilisées

*   **React (v18)** : Bibliothèque JavaScript pour la construction de l'interface utilisateur.
*   **Vite** : Outil de build ultra-rapide pour le développement frontend moderne.
*   **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et responsive.
*   **Framer Motion** : Bibliothèque pour gérer les animations fluides et les transitions.
*   **Lucide React** : Collection d'icônes SVG légères et personnalisables.

## 📂 Architecture du Projet

Le projet suit une structure standard React + Vite, organisée pour la maintenabilité et l'évolutivité.

```
Portfolio/
├── public/              # Fichiers statiques publics
├── src/
│   ├── components/      # Composants réutilisables et sections de la page
│   │   ├── About.jsx       # Section "À propos"
│   │   ├── Contact.jsx     # Section "Contact" avec formulaire
│   │   ├── Education.jsx   # Parcours académique
│   │   ├── Experience.jsx  # Expérience professionnelle
│   │   ├── Footer.jsx      # Pied de page
│   │   ├── Hero.jsx        # Section d'accueil (Bannière principale)
│   │   ├── Navbar.jsx      # Barre de navigation responsive
│   │   ├── Projects.jsx    # Galerie des projets réalisés
│   │   └── Skills.jsx      # Liste des compétences techniques et soft skills
│   ├── App.jsx          # Composant racine assemblant toutes les sections
│   ├── main.jsx         # Point d'entrée de l'application React
│   └── index.css        # Styles globaux et configuration Tailwind
├── index.html           # Point d'entrée HTML
├── tailwind.config.js   # Configuration du thème et des plugins Tailwind
├── vite.config.js       # Configuration de Vite
└── package.json         # Dépendances et scripts du projet
```

## 🛠️ Installation et Démarrage

Prérequis : Node.js installé sur votre machine.

1.  **Cloner ou télécharger le projet** (si ce n'est pas déjà fait).

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse `http://localhost:5173`.

4.  **Construire pour la production** :
    ```bash
    npm run build
    ```
    Les fichiers optimisés seront générés dans le dossier `dist/`.

## 🧩 Détail des Composants

### 1. Navbar (`src/components/Navbar.jsx`)
Une barre de navigation fixe qui change d'apparence au défilement. Elle est entièrement responsive avec un menu "hamburger" pour les mobiles. Elle gère la navigation fluide vers les différentes sections via des ancres (`#home`, `#about`, etc.).

### 2. Hero (`src/components/Hero.jsx`)
La première section visible. Elle contient une introduction animée, le nom, le titre, une brève description et des boutons d'appel à l'action (Voir les travaux, Télécharger CV).

### 3. About (`src/components/About.jsx`)
Présente une biographie détaillée et quelques statistiques clés (années d'expérience, projets complétés, etc.) mises en valeur par des animations au défilement.

### 4. Skills (`src/components/Skills.jsx`)
Affiche les compétences techniques catégorisées (Langages, Bases de données, Outils) et les "Soft Skills". Utilise des barres de progression pour visualiser le niveau de maîtrise des langues.

### 5. Experience (`src/components/Experience.jsx`)
Une chronologie verticale (timeline) détaillant le parcours professionnel. Chaque expérience inclut le poste, l'entreprise, la période et une liste de responsabilités.

### 6. Projects (`src/components/Projects.jsx`)
Une grille présentant les projets phares. Chaque carte de projet contient une image (placeholder actuellement), un titre, une description, des tags technologiques et un lien vers le projet (si disponible).

### 7. Education (`src/components/Education.jsx`)
Affiche le parcours académique sous forme de cartes élégantes, mettant en avant les diplômes obtenus et les établissements fréquentés.

### 8. Contact (`src/components/Contact.jsx`)
Fournit les informations de contact directes (téléphone, email, adresse) et un formulaire de contact stylisé (la logique d'envoi backend n'est pas implémentée dans cette version frontend).

## 🎨 Personnalisation

*   **Couleurs** : Le thème utilise principalement les nuances de `slate` pour le mode sombre et `blue` (`#3b82f6`) comme couleur d'accentuation. Vous pouvez modifier ces couleurs dans `tailwind.config.js` ou directement dans les classes des composants.
*   **Contenu** : Pour mettre à jour les textes, les projets ou les expériences, modifiez directement les tableaux de données (arrays) situés au début de chaque fichier de composant (ex: `const projects = [...]` dans `Projects.jsx`).
*   **Images** : Remplacez les URLs d'images placeholder dans `Projects.jsx` par vos propres images ou capture d'écran de projets.

## 📱 Responsive Design

Le site est conçu avec une approche "Mobile First". Les classes Tailwind comme `md:`, `lg:` sont utilisées pour adapter la mise en page aux écrans plus larges (tablettes et ordinateurs de bureau).

## 🚢 Déploiement

Ce projet peut être facilement déployé sur des plateformes comme Vercel, Netlify ou GitHub Pages.
Puisque c'est une application statique (SPA), la commande `npm run build` génère tout le nécessaire dans le dossier `dist`.
