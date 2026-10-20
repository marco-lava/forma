# Forma — Edilizia & Costruzioni

Landing page dimostrativa e moderna per un'impresa generale di costruzioni e ristrutturazioni edilizie.

## Caratteristiche

- **Architettura Web SPA:** Costruita con React 19, Vite, TypeScript e Tailwind CSS v4.
- **Interfaccia reattiva e accessibile:** Navigazione fluida con scroll-linked motion, modale portfolio e form di contatto interattivo lato client.
- **Pura client-side:** Nessuna dipendenza backend, nessun tracciamento invasivo o framework monolitico.
- **Asset ottimizzati:** Grafiche vettoriali SVG e immagini moderne WebP precaricate in locale per massime prestazioni.

## Requisiti

- Node.js 20+ con `npm` (oppure [Bun](https://bun.sh/))

## Installazione ed Esecuzione

Installare le dipendenze:

```bash
npm install
# oppure: bun install
```

Avviare il server di sviluppo su `http://localhost:5173`:

```bash
npm run dev
# oppure: bun run dev
```

Compilare per la produzione (typecheck + bundle ottimizzato in `dist/`):

```bash
npm run build
# oppure: bun run build
```

Anteprima locale della build di produzione:

```bash
npm run preview
# oppure: bun run preview
```

## Struttura del Progetto

```
.
├── public/              # Asset statici (immagini WebP, font Poppins, icone, Open Graph)
├── src/
│   ├── components/      # Componenti React (landing page, UI wrapper)
│   ├── pages/           # Viste e route dell'applicazione
│   ├── lib/             # Utility (funzioni di stile cn)
│   ├── app.tsx          # Router principale e layout
│   ├── main.tsx         # Entrypoint React 19
│   └── styles.css       # Stili globali e direttive Tailwind CSS
├── index.html           # Documento HTML principale
├── vite.config.ts       # Configurazione Vite e Tailwind CSS v4
├── tsconfig.json        # Configurazione TypeScript
└── package.json         # Dipendenze e script del progetto
```
