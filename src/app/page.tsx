import { Hero, FAQ } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <FAQ />
      </main>
    </div>
  );
}

/* ============================================================================
   CONSEILS ET GUIDE DE RÉPARATION DE TES IMPORTS
   ============================================================================

1. CORRECTION DE LA STRUCTURE DE TES DOSSIERS
----------------------------------------------
En Next.js (App Router), il est fortement recommandé de placer le dossier 
`components` à la racine de `src/` et NON pas à l'intérieur de `src/app/`.

Structure recommandée :

src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── index.ts              <-- Index général (optionnel)
    └── sections/
        ├── index.ts          <-- Fichier Barrel pour les sections
        ├── FAQ/
        │   └── index.tsx     <-- Composant FAQ
        └── Hero/
            └── index.tsx     <-- Composant Hero


2. CONFIGURATION DES "BARREL EXPORTS" (index.ts)
------------------------------------------------
Pour pouvoir faire : import { Hero, FAQ } from "@/components/sections";
Tu dois exporter tes composants dans le fichier `src/components/sections/index.ts`.

Écris ceci dans `src/components/sections/index.ts` :

  export { default as Hero } from "./Hero"; // Si Hero est un export default
  export { default as FAQ } from "./FAQ";   // Si FAQ est un export default

  // OU si tes composants utilisent des "named exports" (ex: export function Hero...) :
  // export { Hero } from "./Hero";
  // export { FAQ } from "./FAQ";


3. VÉRIFICATION DU FICHIER tsconfig.json
-----------------------------------------
Pour que l'alias `@/` fonctionne correctement et pointe vers le dossier `src`,
assure-toi d'avoir ceci dans ton fichier `tsconfig.json` à la racine de ton projet :

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}


4. RÉSUMÉ DES BONNES PRATIQUES D'IMPORTATION
---------------------------------------------
❌ À ÉVITER (Mélangé / Redondant) :
  import { Hero } from "@/components/sections/Hero";
  import { FAQ } from "./FAQ";

✅ À PRIVILÉGIER (Propre grâce aux index.ts) :
  import { Hero, FAQ } from "@/components/sections";

============================================================================ */
