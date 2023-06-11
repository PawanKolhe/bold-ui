# Bold UI

⚡ Modern, fast, and accessible React component library

## 🚀 Features

- 🌲 Tree-shakeable - Include only the components you use
- ✨ Prebuild CSS - No dependency on any CSS library (Emotion, styled-components, etc).
- 🏎 Fast & Small - Light-weight components. Check [bundle size](https://bundlephobia.com/package/@bold-ui/react).
- ♿ Accessible - Follows Web Accessibility Initiative (WAI) standards

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

1. Import React component
1. Import CSS for that component

```javascript
import { Button } from "@bold-ui/react";
import "@bold-ui/react/dist/css/Button.css"; // Imports styles for Button component only

const MyComponent = () => {
  return (
    <div>
      <Button kind="fill">Bold UI</Button>
    </div>
  );
};
```

> **Note:** You will need a module bundler (e.g. webpack, Vite, etc) with a CSS loader to load the CSS. If you use [create-react-app](https://create-react-app.dev/), it already comes with a CSS loader. Alternatively you can import CSS directly in your HTML file via `<link>` tag.

## 🗂 Components

### Primitives

- [**Button**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Button/Button.types.ts)

### Layout

- [**Stack**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Stack/Stack.types.ts)

### Form

- [**Input**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Input/Input.types.ts)

_Feel free to request a new component by [opening an issue](https://github.com/PawanKolhe/bold-ui/issues)._

## 📜 License

This software is open source, licensed under the [MIT License](https://github.com/PawanKolhe/bold-ui/blob/main/LICENSE).
