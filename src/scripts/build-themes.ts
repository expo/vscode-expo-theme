#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const THEME_DIR = path.resolve(__dirname, '../themes');
const BUILD_DIR = path.resolve(__dirname, '../../build');

build();

async function build() {
  fs.mkdirSync(BUILD_DIR, { recursive: true });

  const themes = fs
    .readdirSync(THEME_DIR, { withFileTypes: true })
    .filter((entity) => entity.isFile())
    .map((entity) => {
      const fileName = path.basename(entity.name, path.extname(entity.name));

      return {
        name: fileName,
        input: path.resolve(THEME_DIR, entity.name),
        output: path.resolve(BUILD_DIR, `${fileName}.json`),
      };
    });

  for (const entry of themes) {
    const theme = require(entry.input).default;

    fs.writeFileSync(entry.output, JSON.stringify(theme, null, 2));

    console.log(`✓ ${path.relative(BUILD_DIR, entry.output)}`);
  }
}
