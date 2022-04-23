#!/bin/bash
sass ./scss/style.scss ./code/public/style.css

DIST_DIR="./dist"

if [ -d "$DIST_DIR" ]; then 
    rm -r "$DIST_DIR"
    echo "deleted current dist directory"
fi

cd code
npm run build

cd ..

mv ./code/dist ./dist
