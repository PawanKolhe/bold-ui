import { Button, Input, Stack } from "@bold-ui/react";
import "@bold-ui/react/dist/css/core.css";
import "@bold-ui/react/dist/css/Button.css";
import "@bold-ui/react/dist/css/Input.css";
import "@bold-ui/react/dist/css/Stack.css";

const HomePage = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontWeight: 700,
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
        <Input placeholder="Type something..." clearable />
      </Stack>
    </>
  );
};

export default HomePage;
