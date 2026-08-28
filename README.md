# Atelier — outils immobilier

Site statique regroupant les outils développés au fil des projets. Chaque outil
est une page HTML autonome (pas de backend, pas de dépendances serveur).

## Structure

```
site/
├── index.html                     ← page d'accueil (hero + sommaire des outils)
├── README.md
├── styles/
│   └── atelier.css                ← design system partagé (couleurs, typo, boutons, cartes, glow)
├── scripts/
│   └── back-to-top.js             ← bouton "remonter en haut", partagé par toutes les pages
└── tools/
    └── leboncoin-parser/
        └── index.html              ← outil 1 : extracteur Leboncoin
```

## Direction artistique

Toutes les pages chargent `styles/atelier.css` pour garder la même identité :
fond noir profond, accent violet/rose (`#b240d6`) avec effet de glow, typographie
Space Grotesk (titres) + Inter (texte) + IBM Plex Mono (données/labels).

Composants réutilisables disponibles dans `atelier.css` : `.btn-primary` /
`.btn-ghost` (boutons), `.card` + `.card-hover` (cartes avec glow au survol),
`.glow-orb` (tache de lumière décorative en arrière-plan), `.eyebrow` (label
au-dessus d'un titre), `.badge` (pastille).

**Ne pas dupliquer ces styles dans un nouvel outil** — charger le fichier
partagé (`<link rel="stylesheet" href="../../styles/atelier.css">` depuis un
outil dans `tools/`) et n'écrire en local que ce qui est spécifique à l'outil
(tableau, formulaire, logique propre à sa fonction).

Penser aussi à inclure le bouton "remonter en haut", partagé lui aussi :
`<script src="../../scripts/back-to-top.js"></script>` juste avant `</body>`.

## Ajouter un nouvel outil

1. Créer un dossier : `tools/nom-de-l-outil/`
2. Y placer un `index.html` autonome (le format que Claude produit déjà).
3. Ajouter une carte dans `index.html` (à la racine), dans la `<div class="tools-grid">` :

```html
<a class="tool-card card card-hover" href="tools/nom-de-l-outil/index.html">
  <span class="num">Outil 0X</span>
  <h3>Nom de l'outil</h3>
  <p>Description courte de ce que fait l'outil.</p>
  <span class="open">Ouvrir →</span>
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
