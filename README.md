# 📝 TodoList - Application d'Apprentissage JavaScript

> **Projet d'apprentissage** - Une application TodoList moderne et responsive construite avec JavaScript vanilla, Tailwind CSS et des concepts de programmation orientée objet.

![TodoList Preview](https://img.shields.io/badge/Status-Completed-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🎯 Objectifs d'Apprentissage

Ce projet a été développé dans le cadre de l'apprentissage du **JavaScript moderne** et couvre les concepts suivants :

-   ✅ **ES6+ Modules** - Import/Export de modules
-   ✅ **Classes JavaScript** - Programmation orientée objet
-   ✅ **DOM Manipulation** - Création et gestion d'éléments
-   ✅ **Event Handling** - Gestion des événements utilisateur
-   ✅ **Local Storage** - Persistance des données
-   ✅ **Responsive Design** - Interface adaptative
-   ✅ **CSS Custom Properties** - Variables CSS personnalisées

## 🚀 Fonctionnalités

### ✨ Interface Moderne

-   🎨 **Design Glass Morphism** - Effets de verre et transparence
-   🌈 **Dégradé Orange-Rouge** - Palette de couleurs personnalisée
-   📱 **Responsive Design** - Compatible mobile, tablette, desktop
-   ⚡ **Animations Fluides** - Transitions et effets hover

### 📋 Gestion des Tâches

-   ➕ **Ajout de tâches** - Interface intuitive
-   ✅ **Marquage terminé** - Checkbox interactive
-   🗑️ **Suppression** - Animation de suppression
-   🔍 **Filtrage** - Toutes, À faire, Terminées
-   💾 **Données locales** - Pas de dépendance externe

## 🛠️ Technologies Utilisées

| Technologie                                                             | Version | Description                    |
| ----------------------------------------------------------------------- | ------- | ------------------------------ |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)      | ES6+    | Langage principal              |
| ![HTML5](https://img.shields.io/badge/HTML5-5.0-orange)                 | 5.0     | Structure sémantique           |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC) | 3.3.6   | Framework CSS utilitaire       |
| ![Node.js](https://img.shields.io/badge/Node.js-18+-green)              | 18+     | Environnement de développement |

## 📁 Structure du Projet

```
exercices-11/
├── 📄 index.html              # Page principale
├── 📄 app.js                  # Point d'entrée de l'application
├── 📁 components/
│   └── 📄 TodoList.js         # Composant principal TodoList
├── 📁 functions/
│   ├── 📄 api.js              # Utilitaires API (remplacé par données locales)
│   └── 📄 dom.js              # Utilitaires DOM
├── 📁 src/
│   └── 📄 input.css           # Styles Tailwind source
├── 📁 dist/
│   └── 📄 output.css          # CSS compilé (local)
├── 📄 tailwind.config.js      # Configuration Tailwind
├── 📄 postcss.config.js       # Configuration PostCSS
├── 📄 package.json            # Dépendances et scripts
└── 📄 README.md               # Documentation
```

## 🚀 Installation et Utilisation

### 📋 Prérequis

-   Navigateur web moderne (Chrome, Firefox, Safari, Edge)
-   Aucune installation supplémentaire requise

### ⚡ Démarrage Rapide

1. **Clonez ou téléchargez** le projet
2. **Ouvrez** `index.html` dans votre navigateur
3. **Commencez** à utiliser votre TodoList !

## 🎨 Personnalisation

### 🎨 Palette de Couleurs

Le projet utilise une palette orange-rouge personnalisée :

```css
/* Couleurs principales */
primary: #f97316    /* Orange vif */
secondary: #dc2626   /* Rouge énergique */
accent: #34d399     /* Vert pour les tâches terminées */
```

### 📱 Responsive Design

-   **Mobile** : Interface empilée, boutons compacts
-   **Tablette** : Layout hybride
-   **Desktop** : Interface complète avec effets hover

## 📚 Concepts JavaScript Appris

### 🏗️ Architecture Modulaire

```javascript
// Import/Export ES6
import { TodoList } from "./components/TodoList.js";
import { createElement } from "./functions/dom.js";
```

### 🎯 Classes et POO

```javascript
export class TodoList {
    #todos = []; // Prpriété privée
    #listElement = [];

    constructor(todos) {
        this.#todos = todos;
    }
}
```

### 🎪 Gestion d'Événements

```javascript
// Event listeners
element.addEventListener("submit", (e) => this.#onSubmit(e));
element.addEventListener("click", (e) => this.#toggleFilter(e));
```

### 🎨 Manipulation DOM

```javascript
// Création d'éléments dynamiques
const li = createElement("li", {
    class: "todo-item bg-white/90 backdrop-blur-sm",
});
```

## 🔧 Configuration Développement

### 📦 Installation des Dépendances

```bash
npm install
```

### 🎨 Compilation CSS (Optionnel)

```bash
# Mode dévloppement (watch)
npm run dev

# Mode producton (minifié)
npm run build:prod
```

## 📖 API et Données

### 📊 Structure des Tâches

```javascript
{
    id: number,        // Identifint unique
    title: string,     // Tite de la tâche
    completed: boolean // État de complétiond
}
```

### 💾 Données Locales

Le projet utilise des données locales au lieu d'une API externe :

```javascript
const localTodos = [
    {
        id: 1,
        title: "Faire les courses pour la semaine",
        completed: false,
    },
];
```

## 🎯 Fonctionnalités Avancées

### ✨ Effets Visuels

-   **Glass Morphism** : Effets de transparence et flou
-   **Animations CSS** : Transitions fluides
-   **Hover Effects** : Interactions utilisateur
-   **Responsive Design** : Adaptation multi-écrans

### 🔄 Gestion d'État

-   **Filtrage dynamique** : Affichage conditionnel
-   **État des tâches** : Synchronisation UI/Données
-   **Animations de suppression** : Feedback visuel

## 🐛 Dépannage

### ❓ Problèmes Courants

**Le design ne s'affiche pas ?**

-   Vérifiez que `dist/output.css` existe
-   Videz le cache du navigateur (Ctrl+F5)

**Les fonctionnalités ne marchent pas ?**

-   Ouvrez la console (F12) pour voir les erreurs
-   Vérifiez que tous les fichiers JS sont chargés

## 📈 Améliorations Futures

### 🚀 Fonctionnalités Proposées

-   [ ] **Persistance locale** - Sauvegarde dans localStorage
-   [ ] **Drag & Drop** - Réorganisation des tâches
-   [ ] **Catégories** - Organisation par projets
-   [ ] **Notifications** - Rappels de tâches
-   [ ] **Mode sombre** - Thème alternatif

### 🎨 Améliorations UI/UX

-   [ ] **Animations plus fluides** - Micro-interactions
-   [ ] **Accessibilité** - Support lecteurs d'écran

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Développé dans le cadre de l'apprentissage JavaScript**

### 🌐 Socials:

[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/DenisMaka) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/Denismaka) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/Denismaka) [![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white)](https://tiktok.com/@denismaka3) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/MakaDenis3) [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:makadenis370@gmail.com)

---

<div align="center">

### 🎉 Merci d'avoir exploré ce projet d'apprentissage !

**N'hésitez pas à contribuer, forker ou adapter ce code pour vos propres projets !**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

</div>
