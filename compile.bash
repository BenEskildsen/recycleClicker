#!/bin/bash

# npm run babel -- --plugins transform-react-jsx

# flow transform
# npm run babel -- --presets flow index.js
npm run babel -- js/ -d bin

# clientside require
npm run browserify -- bin/index.js -o bin/bundle.js




