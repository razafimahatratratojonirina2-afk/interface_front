# Association Flamingo — site vitrine

Site en **React 18 + Vite 5**. Une seule page, composée de sections.

## Lancer le projet

```bash
npm install
npm run dev       # serveur de développement
npm run build     # génère le dossier dist/
npm run preview   # prévisualise le build
```

## Structure

```
.
├── index.html            point d'entrée (polices Google Fonts)
├── netlify.toml          configuration du déploiement Netlify
├── vite.config.js
└── src/
    ├── main.jsx          monte l'application + charge les styles globaux
    ├── App.jsx           assemble les sections dans l'ordre d'affichage
    ├── components/       une section = un fichier .jsx (+ son .css si besoin)
    │   ├── Navbar        Hero        Chiffres     APropos
    │   ├── NosActions    Citation    CodHerBus    Steaminist
    │   └── GirlsCanCode  Galerie     Contact      Footer
    ├── styles/
    │   ├── global.css    variables (--pink, --dark…), reset, .w .sec .dk .tag .two
    │   └── shared.css    classes réutilisées par plusieurs sections (.card, .ico, .btn…)
    └── assets/images/
        ├── logos/        icône (flamingo-icone-*) et logo complet (flamingo-logo-*), 5 coloris
        └── photos/       photos optimisées pour le web (1600 px max)
```

Les images sont **importées** dans les composants (`import photo from "../assets/images/photos/img-8220.jpg"`).
Ne jamais écrire `src="src/images/..."` : ce chemin n'existe plus après le build.

## Déployer sur Netlify

1. Pousser le projet sur GitHub.
2. Netlify → **Add new site → Import an existing project** → choisir le dépôt.
3. Les réglages sont lus depuis `netlify.toml` (commande `npm run build`, dossier `dist`, Node 20). Cliquer sur **Deploy**.

Chaque `git push` sur la branche principale redéploie le site automatiquement.

## Points d'attention

- **Casse des noms de fichiers** : Windows l'ignore, Netlify (Linux) non. `./hero` ne trouve pas `Hero.jsx`. Respecter exactement la casse dans les `import`.
- **Styles globaux** : les classes de `styles/` s'appliquent à toute la page. `.btn-primary-pink` est défini dans `Hero.css` et redéfini dans `Contact.css` ; comme `Contact.css` est chargé après, c'est lui qui s'applique aux deux boutons.
- **Polices** : `index.html` charge Poppins et Playfair Display, mais le CSS utilise Nunito, Baloo 2 et Montserrat, qui ne sont pas chargées (le navigateur retombe sur une police système).
- **Liens à compléter** : le bouton « Soutenir l'initiative » (CodHerBus) pointe vers `#soutenir`, qui n'existe pas encore ; l'adresse e-mail du Hero (`contact@association-flamingo.org`) diffère de celle de la section Contact.
