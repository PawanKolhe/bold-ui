export default function (plop) {
  // Helpers
  plop.setHelper("toLowerCase", function (text) {
    return text.toLowerCase();
  });
  // Generators
  plop.setGenerator("React component generator", {
    description: "A generator for React components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{name}}",
        base: `plop-templates/react-component/`,
        templateFiles: "plop-templates/react-component/*",
      },
    ],
  });
}
