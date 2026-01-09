#!/bin/bash

pnpm build
npm version patch

# Remove the scripts, devDependencies, and dependencies sections from package.json
node ./scripts/pre-publish.cjs

cd dist

npm link && npm publish --access public

cd ../
git add package.json
version=$(grep '"version"' package.json | sed -E 's/.*"version": "([^"]+)".*/\1/')
git commit -m "chore: release v${version}"
