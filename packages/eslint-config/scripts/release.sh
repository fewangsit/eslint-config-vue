#!/bin/bash

pnpm build
npm version patch

# Remove the scripts, devDependencies, and dependencies sections from package.json
node ./scripts/pre-publish.cjs

cd dist

npm link && npm publish --access public
