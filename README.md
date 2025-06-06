# TP BDD Playwright

Un projet de démonstration de tests BDD (Behavior Driven Development) utilisant Playwright et Cucumber.js.

## 📝 Description

Ce projet implémente des tests d'acceptance pour une fonctionnalité de connexion utilisateur en utilisant:
- Cucumber.js pour le BDD
- Playwright pour l'automatisation des tests
- Page Object Model pour la structure du code

## 🚀 Installation

```bash
# Cloner le projet
git clone git@github.com:Insu-qg/tp-bdd-playwright.git

# Installer les dépendances
npm install
```

## 🛠️ Structure du Projet

```
tp-bdd-playwright/
├── features/
│   ├── login.feature        # Scénarios BDD
│   ├── step-definitions/    # Implémentation des steps
│   └── support/            # Configuration des tests
├── pages/
│   └── LoginPage.js        # Page Object Model
└── src/
    ├── index.html          # Page de connexion
    └── dashboard/
        └── index.html      # Page tableau de bord
```

## 📋 Scénarios de Test

### Connexion Utilisateur

```gherkin
Feature: Connexion utilisateur
  En tant qu'utilisateur
  Je veux pouvoir me connecter avec mes identifiants
  Afin d'accéder à mon espace personnel

  Scenario: Connexion avec des identifiants valides
    Given je suis sur la page de connexion
    When je saisis un email "user@example.com" et un mot de passe "password123"
    And je clique sur le bouton de connexion
    Then je dois être redirigé vers le tableau de bord
    And je dois voir un message "Bienvenue sur votre tableau de bord"
```

## 🏃‍♂️ Exécution des Tests

1. Démarrer le serveur de développement :
```bash
npm run dev
```

2. Lancer les tests :
```bash
npm run test:e2e
```

## 📦 Scripts NPM Disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run test:e2e` : Lance les tests end-to-end
- `npm run test:e2e:headed` : Lance les tests en mode visuel

## 🔧 Configuration

### Playwright

Le projet utilise une configuration personnalisée pour Playwright :

```javascript
// playwright.config.js
const config = {
    timeout: 30000,
    expect: {
        timeout: 10000
    }
};
```

### Cucumber.js

La configuration de Cucumber.js est définie dans `cucumber.js` :

```javascript
module.exports = {
    default: `--format-options '{"snippetInterface": "async-await"}'`
}
```
