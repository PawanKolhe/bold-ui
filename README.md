# Bold UI

⚡ Modern, fast, and accessible React component library

- 💻 [Demo (Storybook)](https://main--64797a8b450504bdbcae2912.chromatic.com)
- 📚 [Docs](https://github.com/PawanKolhe/bold-ui/tree/main/packages/react#readme)

## Dev Environment

> This project uses the `pnpm` package manager

1. Install dependencies: `pnpm install`
1. Start dev server: `pnpm dev`

## Generate New Component

This command will generate the files necessary to develop a new React component:

```bash
pnpm generate
```

Generated folder structure in `packages/react/src/components/<component-name>/`:

- `index.ts`
- `<component-name>.tsx`
- `<component-name>.stories.tsx`
- `<component-name>.styles.scss`
- `<component-name>.types.ts`

## Troubleshooting

1. Delete all the node modules (external libs): `npx rimraf --glob **/node_modules`
1. Reinstall external pacakges: `pnpm install`
1. Restart the server: `pnpm dev`
