import { Button, Input, Stack } from "@bold-ui/react";
import "@bold-ui/react/dist/css/core.css";
import styles from "./index.module.scss";
import Page2 from "./page2";

const HomePage = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontWeight: 600,
        }}
      >
        Bold UI
      </h1>
      <Stack
        spacing={4}
        direction="column"
        width="300px"
        justifyContent="flex-start"
      >
        <Button hasDepth>Button Test</Button>
        <Input
          className={styles.InputCustom}
          placeholder="Type something..."
          clearable
        />
        <Page2 />
      </Stack>
    </>
  );
};

export default HomePage;
