# Atelier — outils immobilier

Site statique regroupant les outils développés au fil des projets. Chaque outil
est une page HTML autonome (pas de backend, pas de dépendances serveur).

## Structure

```
site/
├── index.html                     ← page d'accueil (sommaire, liens vers les outils)
├── README.md
└── tools/
    └── leboncoin-parser/
        └── index.html              ← outil 1 : extracteur Leboncoin
```

## Ajouter un nouvel outil

1. Créer un dossier : `tools/nom-de-l-outil/`
2. Y placer un `index.html` autonome (le format que Claude produit déjà).
3. Ajouter une carte dans `index.html` (à la racine), dans la `<div class="grid">` :

```html
<a class="sheet" href="tools/nom-de-l-outil/index.html">
  <span class="sheet-num">Feuillet 0X</span>
  <h2>Nom de l'outil</h2>
  <p>Description courte de ce que fait l'outil.</p>
  <span class="tag">Catégorie</span>
</a>
```

4. Remplacer un des blocs `<div class="sheet placeholder">...</div>` existants,
   ou en ajouter un nouveau à la fin de la grille (elle s'adapte automatiquement).

## Déploiement recommandé

**Option A — GitHub + Cloudflare Pages (recommandé pour un usage évolutif)**

1. Créer un compte GitHub (gratuit) si pas déjà fait.
2. Créer un dépôt (public ou privé, peu importe pour la suite) et y pousser ce dossier.
3. Sur [pages.cloudflare.com](https://pages.cloudflare.com), connecter ce dépôt.
   Build settings : aucun (site statique) — dossier racine `/`.
4. Le site se republie automatiquement à chaque `git push`.
5. Pour rendre le site privé : activer **Cloudflare Access** (gratuit jusqu'à
   50 utilisateurs) sur le domaine Pages — connexion par code reçu par email,
   pas de mot de passe à gérer. Désactivable en un clic pour rendre le site public plus tard.

**Option B — Netlify Drop (démarrage rapide, sans compte)**

1. Aller sur [netlify.com/drop](https://app.netlify.com/drop).
2. Glisser le dossier `site/` entier.
3. URL générée immédiatement. Pour mettre à jour : re-glisser le dossier
   (pas de synchronisation automatique avec un dépôt).

## Notes

- Tous les outils sont conçus pour être autonomes (HTML/CSS/JS en un seul
  fichier, sans build ni dépendance externe), donc aucune étape de compilation
  n'est nécessaire avant déploiement.
