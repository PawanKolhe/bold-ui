import { Button } from "@bold-ui/react";
import "@bold-ui/react/dist/css/index.css";

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
      <Button hasDepth>Button Test</Button>
    </>
  );
};

export default HomePage;
