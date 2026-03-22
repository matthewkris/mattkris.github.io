#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

const versionMatch = content.match(/index\.css\?v=(\d+)/);
const currentVersion = versionMatch ? parseInt(versionMatch[1], 10) : 0;
const newVersion = currentVersion + 1;

content = content.replace(
  /index\.css\?v=\d+/,
  `index.css?v=${newVersion}`
);

fs.writeFileSync(htmlPath, content, 'utf-8');
console.log(`Cache-bust version incremented: v${currentVersion} → v${newVersion}`);
