# Bold UI

<p>
  <a href="https://www.npmjs.com/package/@bold-ui/react">
    <img src="https://img.shields.io/npm/v/@bold-ui/react?style=flat-square" alt="npm version" />
  </a>
  <!-- <a href="https://www.npmjs.com/package/@bold-ui/react">
    <img src="https://img.shields.io/npm/dw/@bold-ui/react?style=flat-square" alt="npm downloads" />
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@bold-ui/react?style=flat-square" alt="size" />
  <a href="https://www.jsdelivr.com/package/npm/@bold-ui/react">
    <img src="https://data.jsdelivr.com/v1/package/npm/@bold-ui/react/badge" alt="jsdelivr" />
  </a> -->
  <img src="https://img.shields.io/npm/l/@bold-ui/react?style=flat-square" alt="license" />
</p>

Modern, fast, and accessible React component library

## ✨ Features

- 📦 A set of high-quality React components out of the box
- 🌲 Tree-shakeable - Include only the components you use
- ⚡ Prebuild CSS - No dependency on any CSS library (Emotion, styled-components, etc)
- 🚀 Fast & Small - Light-weight components. Check [bundle size](https://bundlephobia.com/package/@bold-ui/react).
- ♿ Accessible - Follows Web Accessibility Initiative (WAI) standards
- 🛡️ Types included - Written in TypeScript with predictable static types

## 💻 Demo

- [Storybook](https://main--64797a8b450504bdbcae2912.chromatic.com)

## 📦 Installation

```
# npm
npm i @bold-ui/react

# yarn
yarn add @bold-ui/react

# pnpm
pnpm add @bold-ui/react
```

## 🔨 Usage

Some initial setup is required to use the library.

1. Import core CSS (`core.css`) and component CSS (`<component-name>.css`) in your project root file (`App.js`).
1. Import React component where you need to use it

```javascript
// App.js
import "@bold-ui/react/dist/css/core.css"; // Imports CSS Variables required by the library

import "@bold-ui/react/dist/css/Button.css"; // Imports styles for Button component
import "@bold-ui/react/dist/css/Input.css"; // Imports styles for Input component
import "@bold-ui/react/dist/css/Stack.css"; // Imports styles for Stack component

...
```

```javascript
// MyComponent.jsx
import { Button } from "@bold-ui/react";

const MyComponent = () => {
  return (
    <div>
      <Button kind="fill">Bold UI</Button>
    </div>
  );
};
```

> **Note:** In order to load the styles, you'll need a CSS loader in your module bundler (e.g. webpack, Vite, etc). If you use [create-react-app](https://create-react-app.dev/), it already comes with a CSS loader. Alternatively you can import CSS directly in your HTML file via `<link>` tag.

## 🗂 Components

### Primitives

- [**Button**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Button/Button.types.ts)

### Layout

- [**Stack**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Stack/Stack.types.ts)

### Form

- [**Input**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Input/Input.types.ts)

_Feel free to request a new component by [opening an issue](https://github.com/PawanKolhe/bold-ui/issues)._

## 🖱 Environment Support

- Modern browsers
- [Browserslist](https://browsersl.ist/#q=defaults)
  - all browser versions with > 0.5% of the audience worldwide
  - last 2 versions of each browser
  - exclude dead browser versions

## 📜 License

This software is open source, licensed under the [MIT License](https://github.com/PawanKolhe/bold-ui/blob/main/LICENSE).
