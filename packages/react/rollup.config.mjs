import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcssPresetEnv from "postcss-preset-env";

/** Issue with using "assert": https://github.com/eslint/eslint/discussions/15305 */
// import packageJson from "./package.json" assert { type: "json" };
/** Workaround for above issue */
import { readFileSync } from "fs";
import { libStylePlugin, onwarn } from "./rollup-plugin/index.mjs";
const packageJson = JSON.parse(readFileSync("./package.json"));

const isProduction = !process.env.ROLLUP_WATCH;

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: !isProduction,
    },
    {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "./src/",
      sourcemap: !isProduction,
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    // @ts-expect-error
    peerDepsExternal({
      packageJsonPath: "./package.json",
    }),
    libStylePlugin({
      plugins: [postcssPresetEnv()],
      use: ["sass"],
      minimize: isProduction,
      sourcemap: !isProduction,
      modules: {
        generateScopedName: "css-[hash:base64:7]",
      },
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", sourceMap: !isProduction }),
    isProduction && (await import("@rollup/plugin-terser")).default(),
  ],
  onwarn,
};

export default config;
