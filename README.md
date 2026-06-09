# Portfolio Aboubacar Issaka Idi - Analyst SOC Junior

Portfolio cybersecurite Blue Team avec design corporate/SOC.

## ATTENTION DEPLOIEMENT (pour eviter le 404 sur Vercel)

Quand tu push sur GitHub, les fichiers doivent etre A LA RACINE du repo, PAS dans un sous-dossier.

Le repo GitHub doit ressembler a :
```
mon-repo/
├── app/
├── components/
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

Et PAS a :
```
mon-repo/
└── portfolio-issaka/        <-- mauvais !
    ├── app/
    └── ...
```

## Etapes de deploiement (Windows 11)

### 1. Extraire le ZIP

Extraire le ZIP. Tu obtiens un dossier `portfolio-issaka/` avec tous les fichiers a l'interieur.

### 2. Tester en local

```powershell
cd C:\Users\TonNom\Documents\portfolio-issaka
npm install
npm run dev
```

Ouvre http://localhost:3000 pour verifier que tout fonctionne.

### 3. Init Git et push sur GitHub

```powershell
cd C:\Users\TonNom\Documents\portfolio-issaka

git init
git add .
git commit -m "Initial portfolio Aboubacar Issaka Idi"
git branch -M main

# Creer un repo sur github.com (ex: portfolio-issaka), puis :
git remote add origin https://github.com/TON_USERNAME/portfolio-issaka.git
git push -u origin main
```

IMPORTANT : tu fais ces commandes DEPUIS le dossier portfolio-issaka, pas depuis son parent.

### 4. Deployer sur Vercel

1. Va sur https://vercel.com/new
2. Connecte ton compte GitHub
3. Selectionne le repo `portfolio-issaka`
4. Vercel detecte automatiquement Next.js
5. Clic sur "Deploy"
6. Attendre 2 minutes
7. Tu obtiens une URL comme `portfolio-issaka-xxx.vercel.app`

## Tu as un 404 sur Vercel ?

Cause la plus frequente : les fichiers sont dans un sous-dossier sur GitHub au lieu de la racine.

**Solution rapide** : sur Vercel, va dans Settings du projet -> General -> Root Directory -> tape `portfolio-issaka` (ou le nom du sous-dossier) -> Save -> Redeploy.

**Solution propre** : restructurer le repo GitHub pour que les fichiers soient a la racine.

## Personnalisation

Tout le contenu est dans `components/` :
- `Hero.tsx` : nom, role, localisation
- `About.tsx` : bio, langues, hobbies
- `Skills.tsx` : 8 categories de competences
- `Projects.tsx` : 9 projets reels
- `Experience.tsx` : 6 experiences (1 SOC Junior + 5 stages)
- `Certifications.tsx` : 15 certifs obtenues + 4 en cours
- `Contact.tsx` : email, LinkedIn, telephones
- `Terminal.tsx` : commandes interactives

Ajouter le CV : place `cv-issaka.pdf` dans `public/`.

## Design (different de celui de Luc)

- Palette : bleu marine + bleu primary (#4f9eff) + vert turquoise (#00d4aa)
- Police display : Rajdhani (au lieu d'Orbitron)
- Effet "corner brackets" sur les cartes (touche corporate SOC)
- Background avec dégradé radial subtil
- Style "Blue Team officiel" plus que "hacker terminal"

## Sections (memes que celui de Luc)

1. Hero
2. About
3. Skills
4. Projects
5. Experience
6. Certifications
7. SOC Dashboard (live)
8. Network Globe (Three.js)
9. Terminal interactif
10. Contact

## Stack technique

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js + react-three-fiber (globe 3D)
- Lucide React (icones)
