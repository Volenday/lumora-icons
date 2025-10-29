#!/usr/bin/env node
// Simple validation for SVG icons per PRD
// - Filenames must be kebab-case
// - viewBox must be 0 0 24 24
// - No inline colors except currentColor; fill none allowed

const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(process.cwd(), "src", "assets", "icons");

const isKebabCase = (name) => /^[a-z0-9]+(?:-[a-z0-9]+)*\.svg$/.test(name);

const validateSvg = (filePath, fileName) => {
  const content = fs.readFileSync(filePath, "utf8");
  const errors = [];

  if (!isKebabCase(fileName)) {
    errors.push(`Filename not kebab-case: ${fileName}`);
  }

  if (!/viewBox=\"0 0 24 24\"/.test(content)) {
    errors.push('Missing viewBox="0 0 24 24"');
  }

  if (/(fill=\"(?!none\").+?\")/.test(content)) {
    errors.push('Inline fill color found (only fill="none" is allowed)');
  }

  if (/(stroke=\"(?!currentColor\").+?\")/.test(content)) {
    errors.push("Inline stroke color must be currentColor");
  }

  return errors;
};

const run = () => {
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`Icons directory not found: ${ICONS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ICONS_DIR).filter((f) => f.endsWith(".svg"));
  let failed = false;
  for (const file of files) {
    const full = path.join(ICONS_DIR, file);
    const errs = validateSvg(full, file);
    if (errs.length) {
      failed = true;
      console.error(`\n[${file}]`);
      for (const e of errs) console.error(` - ${e}`);
    }
  }

  if (failed) {
    console.error("\nIcon validation failed.");
    process.exit(1);
  } else {
    console.log("All icons passed validation.");
  }
};

run();
