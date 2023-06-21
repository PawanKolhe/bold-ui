import "../src/styles/core.global.scss";

/** @type {import('@storybook/react').Preview} */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "white",
      values: [
        {
          name: "black",
          value: "#000000",
        },
        {
          name: "grey-100",
          value: "#151515",
        },
        {
          name: "grey-90",
          value: "#262626",
        },
        {
          name: "grey-10",
          value: "#f4f4f4",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
};

export default preview;
