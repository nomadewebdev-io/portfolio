# Portfolio - Mamadou Diallo

Portfolio professionnel de développeur web full-stack. Un site moderne et dynamique pour présenter mes projets, compétences et faciliter le contact avec les clients potentiels.

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone https://github.com/mamadou-diallo/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## ✨ Fonctionnalités

- **Design moderne** - Interface sombre avec dégradés et effets visuels
- **Animations fluides** - Transitions et effets avec Framer Motion
- **100% Responsive** - Compatible mobile, tablette et desktop
- **SEO optimisé** - Meta tags et Open Graph
- **Performance** - Framework Next.js pour un rendu rapide

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/                 # Pages et layout principal
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ScrollToTop
│   │   ├── sections/        # Sections du portfolio
│   │   └── ui/              # Composants réutilisables
│   └── app/globals.css      # Styles globaux
├── public/                  # Assets statiques
├── tailwind.config.ts       # Configuration Tailwind
└── package.json
```

## 🛠 Stack technique

- **Framework** - Next.js 14 (App Router)
- **Styling** - Tailwind CSS
- **Animations** - Framer Motion
- **Icônes** - Lucide React
- **Police** - Google Fonts (Inter, Space Grotesk)

## 📝 Personnalisation

### Modifier les informations personnelles

Éditez les fichiers dans `src/components/sections/` pour modifier :
- `Hero.tsx` - Présentation principale
- `About.tsx` - Bio et parcours
- `Skills.tsx` - Compétences
- `Projects.tsx` - Projets
- `Experience.tsx` - Expérience professionnelle
- `Contact.tsx` - Liens de contact

### Ajouter des projets

Modifiez le tableau `projects` dans `src/components/sections/Projects.tsx`.

### Modifier les couleurs

Editez `src/app/globals.css` pour changer les variables CSS.

## 🚀 Déploiement

Le projet est déployé et accessible en ligne :

🌐 **[portfolio-nomade.netlify.app](https://portfolio-nomade.netlify.app)**

Le projet est prêt pour être déployé sur [Vercel](https://vercel.com) :

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connectez simplement votre repository GitHub à Vercel.

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

---

Créé avec 💜 par Mamadou Diallo