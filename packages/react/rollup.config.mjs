import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import packageJson from "./package.json" assert { type: "json" };

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    //@ts-expect-error
    peerDepsExternal({
      packageJsonPath: "./package.json",
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      plugins: [postcssPresetEnv()],
    }),
    isProduction && (await import("@rollup/plugin-terser")).default(),
  ],
};

export default config;
