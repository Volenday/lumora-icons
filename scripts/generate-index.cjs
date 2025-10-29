// Regenerate top-level exports in src/index.ts based on icons in src/icons
// This runs after SVGR generates React components from SVGs

/* eslint-disable */
const fs = require("fs");
const path = require("path");

// Resolve important paths relative to this script
const rootDir = path.resolve(__dirname, "..");
const iconsDir = path.resolve(rootDir, "src", "icons");
const indexFile = path.resolve(rootDir, "src", "index.ts");

/**
 * Read icon component filenames and derive component names.
 * Excludes barrel files like index.ts / index.tsx.
 */
const getIconComponentNames = () => {
  if (!fs.existsSync(iconsDir)) return [];
  const files = fs.readdirSync(iconsDir, { withFileTypes: true });
  return files
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter(
      (name) => name.endsWith(".tsx") && name.toLowerCase() !== "index.tsx"
    )
    .map((name) => name.replace(/\.tsx$/, ""))
    .sort((a, b) => a.localeCompare(b));
};

/**
 * Generate the content for src/index.ts with consistent ordering and formatting.
 * Tabs for indentation are respected by not adding extra indentation on export lines.
 */
const generateIndexContent = (componentNames) => {
  const headerLines = [
    "export * from './types';",
    "export { IconBase } from './components/IconBase';",
  ];

  const iconExportLines = componentNames.map((name) => {
    return `export { default as ${name} } from './icons/${name}';`;
  });

  return [...headerLines, ...iconExportLines, ""].join("\n");
};

// Main
const componentNames = getIconComponentNames();
const content = generateIndexContent(componentNames);

fs.writeFileSync(indexFile, content, "utf8");
console.log(
  `Updated ${path.relative(rootDir, indexFile)} with ${
    componentNames.length
  } icon exports.`
);
