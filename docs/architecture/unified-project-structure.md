# Unified Project Structure

```
simpletasks/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── apps/
│   └── web/
│       ├── src/
│       │   ├── components/
│       │   ├── hooks/
│       │   ├── services/
│       │   ├── stores/
│       │   ├── styles/
│       │   └── utils/
│       ├── public/
│       ├── tests/
│       └── package.json
├── packages/
│   ├── shared/
│   │   ├── src/
│   │   │   ├── types/
│   │   │   ├── constants/
│   │   │   └── utils/
│   │   └── package.json
│   └── config/
│       ├── eslint/
│       ├── typescript/
│       └── jest/
├── netlify/
│   └── functions/
├── docs/
│   ├── prd.md
│   ├── ux-wireframes-specifications.md
│   └── fullstack-architecture.md
├── .env.example
├── package.json
├── vite.config.ts
└── README.md
```
