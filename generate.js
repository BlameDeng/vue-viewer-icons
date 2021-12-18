/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const list = require("@itwin/itwinui-icons/icons-list.json");

let html = "";
let imports = "";
let index = "";

list.forEach((i) => {
  const svgPath = path.resolve(
    __dirname,
    "node_modules",
    "@itwin",
    "itwinui-icons",
    "icons",
    i
  );

  const svgName = toPascalCase(i);
  const componentPath = path.resolve(
    __dirname,
    "src",
    "components",
    "icons",
    svgName + ".tsx"
  );

  const svgContent = fs.readFileSync(svgPath, "utf8");

  const componentName = "Svg" + svgName;

  const tsx = `import { defineComponent, SVGAttributes } from "vue";

  export const ${componentName} = defineComponent<SVGAttributes>({
    setup() {
      return () => ${svgContent};
    },
  });`;

  fs.writeFileSync(componentPath, tsx, "utf-8");

  html += `<div title="${svgName}"><${componentName} /></div>\n`;
  imports += `import { ${componentName} } from "./components/icons/${svgName}";\n`;
  index += `export * from "./icons/${svgName}";\n`;
});

const template = `import "./HelloWorld.css";

import { defineComponent } from "vue";

${imports}
export const HelloWorld = defineComponent({
  setup() {
    return () => (
      <div class="hello">
        ${html}
      </div>
    );
  },
});`;

const helloWorldPath = path.resolve(__dirname, "src", "HelloWorld.tsx");
const indexPath = path.resolve(__dirname, "src", "components", "index.ts");

fs.writeFileSync(helloWorldPath, template, "utf-8");
fs.writeFileSync(indexPath, index, "utf-8");

function toPascalCase(str) {
  return str
    .replace(/\.svg$/, "")
    .split("-")
    .reduce((p, c) => p + c.replace(c[0], c[0].toUpperCase()), "");
}
