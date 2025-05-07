import { readFileSync, writeFileSync } from 'fs';

// Get the version from package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

// Create a new package.json with the dynamic version
const newPackageJson = {
  ...packageJson,
  devDependencies: undefined,
  scripts: undefined,
};

writeFileSync('dist/package.json', JSON.stringify(newPackageJson, null, 2));
