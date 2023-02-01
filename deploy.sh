#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# retrieve version
VERSION=$(node -p -e "require('./package.json').version")
#echo $VERSION

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "v$VERSION"

git push -f git@github.com:MonsieurCro/resume.git master:gh-pages

cd -