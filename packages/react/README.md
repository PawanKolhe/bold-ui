# Bold UI

⚡ Modern, fast, and accessible React component library

## Demo

- [Storybook](https://main--64797a8b450504bdbcae2912.chromatic.com)

## Components

- **Button**

  ```javascript
  children?: ReactNode;
  size?: "default" | "small" | "large";
  kind?: "default" | "outline" | "primary" | "text" | "link";
  shape?: "default" | "sharp" | "round" | "circle";
  color?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  borderWidth?: string;
  /**
   * Set to true if button only contains an icon.
   */
  isIconOnly?: boolean;
  /**
   * Makes the button a full width button.
   */
  isFullWidth?: boolean;
  /**
   * Removes the padding inside the button.
   * Supported kinds: 'ButtonKind.LINK'
   */
  noSpacing?: boolean;
  /**
   * Adds a 2D depth effect to the button.
   * Supported kinds: 'ButtonKind.OUTLINE'
   */
  hasDepth?: boolean;
  /**
   * Sets button color to red.
   */
  isDanger?: boolean;
  /**
   * Sets button color to green.
   */
  isSuccess?: boolean;
  ```
