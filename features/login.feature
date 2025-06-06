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

  Scenario: Connexion avec des identifiants invalides
    Given je suis sur la page de connexion
    When je saisis un email "invalid@example.com" et un mot de passe "wrongpass"
    And je clique sur le bouton de connexion
    Then je dois voir un message d'erreur "Identifiants incorrects"
