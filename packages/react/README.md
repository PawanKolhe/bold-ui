# Bold UI

⚡ Modern, fast, and accessible React component library

## 🚀 Features

- 🧩 Modular
- 🌲 Tree-shakeable - include only the components you use
- ✨ Prebuild CSS - no dependency on any CSS library (Emotion, styled-components, etc).
- 🏎 Fast & Small - light-weight components
- ♿ Accessible - follows Web Accessibility Initiative (WAI) standards

> Note: Your project module bundler (e.g. webpack, Vite, etc) will need a CSS loader to load the prebuilt CSS

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

## 🗂 Components

- [**Button**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/button/Button.types.ts)
- [**Stack**](https://github.com/PawanKolhe/bold-ui/blob/main/packages/react/src/components/Stack/Stack.types.ts)

## License

This software is open source, licensed under the [MIT License](https://github.com/PawanKolhe/bold-ui/blob/main/LICENSE).
