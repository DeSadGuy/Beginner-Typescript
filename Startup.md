### Download
https://www.typescriptlang.org/download
## Typescript tools

- npm install -g npm
  - npm -v
- npm install --global yarn
  - yarn -v
- https://nodejs.org/en/download/
  - node -v

## Creating project

- create a new project with `yarn --init`
- add TS with `yarn add typescript -D` -D because we want to include the TS compiler as a development utility but do not want any traces of it in the resulting compiled JavaScript
- add the TS config files with `yarn tsc -init`
- start compilation in watch mode with `yarn tsc -w`

`yarn add immutable`

- touch main.ts to create file
- yarn tsc to complie. with -w for watch
- node bin\file.js to run


### tsconfig.json 
- enable "sourceMap": true, for debugging
- enable   "outDir": "./bin",  for output .js files
- "target": "ES2020",
- "noImplicitAny": true,  


