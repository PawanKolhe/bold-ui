import path from "path";
import { glob } from "glob";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import packageJson from "./package.json" assert { type: "json" };

const isProduction = !process.env.ROLLUP_WATCH;

const bundleCss = () => {
  const config = [];
  const files = glob.globSync("./src/**/*.scss");
  files.forEach((file) => {
    const filename = path.basename(
      file,
      file.includes(".module.scss") ? ".module.scss" : path.extname(file)
    );
    config.push(
      postcss({
        include: file,
        extract: path.resolve(`./dist/css/${filename}.css`),
        plugins: [postcssPresetEnv()],
        use: ["sass"],
        minimize: isProduction,
        sourcemap: !isProduction,
      })
    );
  });
  return config;
};

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
      file: packageJson.module,
      format: "esm",
      sourcemap: !isProduction,
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    //@ts-expect-error
    peerDepsExternal({
      packageJsonPath: "./package.json",
    }),
    ...bundleCss(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", sourceMap: !isProduction }),
    isProduction && (await import("@rollup/plugin-terser")).default(),
  ],
};

export default config;
