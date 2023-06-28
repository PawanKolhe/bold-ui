import { createFilter } from "@rollup/pluginutils";
import postCssTransformer from "./postCssTransformer.mjs";
import fs from "fs-extra";
import path from "path";
import sass from "sass";
import { glob } from "glob";

const PLUGIN_NAME = "rollup-plugin-library-style";
/** This path will be replaced with relative path */
export const MAGIC_PATH = "@@_MAGIC_PATH_@@";
const MAGIC_PATH_REGEX = /@@_MAGIC_PATH_@@/g;

const outputPaths = [];

const defaultLoaders = [
  {
    name: "sass",
    regex: /\.(sass|scss)$/,
    process: ({ filePath }) => ({
      code: sass.compile(filePath).css.toString(),
    }),
  },
  {
    name: "css",
    regex: /\.(css)$/,
    process: ({ code }) => ({ code }),
  },
];

const replaceMagicPath = (fileContent) =>
  fileContent.replace(MAGIC_PATH_REGEX, "../..");

const libStylePlugin = (options = {}) => {
  const {
    loaders,
    include,
    exclude,
    importCSS = true,
    ...postCssOptions
  } = options;

  const allLoaders = [...(loaders || []), ...defaultLoaders];
  const filter = createFilter(include, exclude);
  const getLoader = (filepath) =>
    allLoaders.find((loader) => loader.regex.test(filepath));

  return {
    name: PLUGIN_NAME,

    options(options) {
      if (!options.output) console.error("missing output options");
      else
        options.output.forEach((outputOptions) =>
          outputPaths.push(outputOptions.dir)
        );
    },

    async transform(code, id) {
      // Check if the file is a CSS/Sass file
      const loader = getLoader(id);
      if (!filter(id) || !loader) return null;

      const filePath = id;
      const filePathObj = path.parse(id);

      // Load CSS/Sass file as CSS file with loader
      const rawCss = await loader.process({ filePath, code });

      // Apply PostCSS
      const postCssResult = await postCssTransformer({
        code: rawCss.code,
        filePath,
        options: postCssOptions,
      });

      // Watch dependencies
      for (const dependency of postCssResult.dependencies)
        this.addWatchFile(dependency);

      const cssFileName = `${filePathObj.name.replace(
        /\.(module|global)$/,
        ""
      )}.css`;
      const cssFilePath = `css/${cssFileName}`;

      // Create a new CSS file with the generated hash class names
      this.emitFile({
        type: "asset",
        fileName: cssFilePath,
        source: postCssResult.extracted.code,
      });

      // Import statement to be added to the js file
      const importStr = importCSS
        ? `import "${MAGIC_PATH}/${cssFilePath}";\n`
        : "";

      // Create a new js file with css module
      return {
        code: importStr + postCssResult.code,
        map: { mappings: "" },
      };
    },

    async closeBundle() {
      if (!importCSS) return;

      // Get all the modules that import CSS files
      const importersPaths = outputPaths
        .reduce((result, currentPath) => {
          result.push(glob.sync(`${currentPath}/**/*.js`));
          return result;
        }, [])
        .flat();

      // Replace magic path with relative path
      await Promise.all(
        importersPaths.map((currentPath) =>
          fs
            .readFile(currentPath)
            .then((buffer) => buffer.toString())
            .then(replaceMagicPath)
            .then((fileContent) => fs.writeFile(currentPath, fileContent))
        )
      );
    },
  };
};

const onwarn = (warning, warn) => {
  if (
    warning.code === "UNRESOLVED_IMPORT" &&
    warning.message.includes(MAGIC_PATH)
  )
    return;
  if (warning.code === "THIS_IS_UNDEFINED") return;
  warn(warning);
};

export { libStylePlugin, onwarn };
