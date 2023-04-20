# Contributing

@TODO add an overview

---

## Set up the project

### __Set up your development machine__

1.  Check your __Git__ version:  
    `git --version # should be 'git version 2.20.1' or greater`
2.  Check your __Node__ version:  
    `node --version # should be 'v14.0.0' or greater`
3.  Check your global __TypeScript__ version:  
    `tsc --version # should be 'Version 4.9.4' or greater`  
    There is no actual TypeScript code in this project, but TypeScript can infer
    types from the JavaScript code and JSDoc comments.
    - VS Code uses `tsserver` to highlight errors in __src/__ JavaScript files
    - `tsc` is needed to generate the __gen-class.d.ts__ type declaration

### __Set up VS Code__

1.  Check your __VS Code__ version:  
    `code --version # should be '1.74.3' or greater`
2.  Install and enable the [`jeremyljackson.vs-docblock`
    ](https://marketplace.visualstudio.com/items?itemName=jeremyljackson.vs-docblock)
    extension.
3.  Install and enable the [`dnamsons.kimbie-dark-plus`
    ](https://marketplace.visualstudio.com/items?itemName=dnamsons.kimbie-dark-plus)
    theme.  

### __Set up the repo locally__

Clone the repository, and `cd` into it:  
`git clone git@github.com:0bdx/gen-class.git && cd gen-class`

Install the runtime dependency, and the two dev-dependencies:  
`npm i`  
@0bdx/ainta 0.0.18, 1 package, 114 kB for 7 items.  
@0bdx/build-helpers 0.0.4, 1 package, 22 kB for 6 items.  
rollup 3.15.0, 2 packages, 2.6 MB for 31 items.  

Open the `gen-class` project in VS Code:  
`code .`

---

## Handy dev commands

Run all tests on the in-development source code:  
`npm test`

Build __gen-class.js__ and __gen-class.d.ts__:  
`npm run build:prod`  
`npm run build:types`

Run all tests on the built __gen-class.js__ file:  
`npm run preflight:test`

Check that __gen-class.js__ uses all types correctly:  
`npm run preflight:types` @TODO fix this

Or run all the build and preflight steps in one line, eg before committing:  
`npm run build && npm run preflight`

Check that the shell command will work as expected:  
`node bin/gen-class.js examples/example-1/basic-class.json`

Display what will be published:  
`npm publish --dry-run`

Publish to [npmjs.com/package/@0bdx/gen-class](
https://www.npmjs.com/package/@0bdx/gen-class):  
`npm publish`

---

## How to create a project like this, from scratch

### __1. Create the initial repo__

1. At GitHub, click the ‘+’ icon, and ‘New repository’
2. Name it, describe it, tick ‘Add a README file’, choose MIT license
3. Click ‘Create repository’
4. Click the ‘Code’ button, ‘Local’ tab, ‘SSH’, and the copy icon
5. In your Terminal, `cd` to wherever you work
6. `git clone ` and paste something like ‘git@github.com:kim/my-app.git’
7. `cd` into the new directory, eg `cd my-app`

### __2. Add the .gitignore file__

```
.DS_Store
node_modules
node_modules.zip
```

### __3. Add placeholders for the type declarations and main files__

In stage 4. below, `npm init` will use the presence of these files to populate
the `"types"` and `"main"` fields of __package.json__.

```sh
touch gen-class.d.ts gen-class.js
```

### __4. Add the initial package.json file__

```sh
npm init --yes
sed -ix 's/: "1.0.0",/: "0.0.1",/' *e.json
sed -ix 's/keywords": \[/keywords": [ "class", "generator", "cli" /' *e.json
sed -ix 's/: "ISC",/: "MIT",/' *e.json
A=(§{1..5},\\n·);sed -ix "s/\"main/${A[*]}·\"main/;s/·/ /g" *e.json
A=(§{a..f},\\n···);sed -ix "s/\"test/${A[*]}·\"test/;s/·/ /g" *e.json
sed -ix 's/§1/"type": "module"/' *e.json
sed -ix 's|§2|"files": [ "§0d.ts", "§0js", "bin/§0js" ]|' *e.json
sed -ix 's/§3/"engines": { "node": ">= 14.0.0" }/' *e.json
sed -ix 's|§4|"bin": { "gen-class": "bin/§0js" }|' *e.json
sed -ix 's/§5/"preferGlobal": true/' *e.json
sed -ix 's/§a/"§Z:§A": "rollup -c"/' *e.json
sed -ix 's/§b/"§Z:§B": "tsc §0js §_"/' *e.json
sed -ix 's/§_/--allowJs --declaration --emitDeclarationOnly/' *e.json
sed -ix 's/§c/"§Z": "for s in {§A,§B};do npm run §Z:$s;done"/' *e.json
sed -ix 's/§A/prod/g;s/§B/types/g;s/§Z/build/g;' *e.json
sed -ix 's/§d/"§Z:§D": "echo \\"🧬 test.js\\" \&\& node test.js"/' *e.json
sed -ix 's/§e/"§Z:§E": "tsc §0js §_"/' *e.json
sed -ix 's/§_/--allowJs --checkJs --noEmit/' *e.json
sed -ix 's/§f/"§Z": "for s in {§D,§E};do npm run §Z:$s;done"/' *e.json
sed -ix 's/§D/test/g;s/§E/types/g;s/§Z/preflight/g;' *e.json
sed -ix 's|Error: no test specified|🧪 src/test.js|' *e.json
sed -ix 's|exit 1|node src/test.js|' *e.json
sed -ix 's/§0/gen-class./g' *e.json
sed -ix 's/author": "/author": "0bdx <0@0bdx.com> (0bdx.com)/' *e.json
rm package.jsonx
npm install @0bdx/build-helpers --save-dev
npm install rollup --save-dev
npm install @0bdx/ainta
```

1. Create a default __package.json__ file:  
   `npm init --yes`
2. Change the version to 0.0.1:  
   `sed -ix 's/: "1.0.0",/: "0.0.1",/' *e.json`
3. Add keywords, for better [npmjs.org](http://npmjs.org) searchability:  
   `sed -ix 's/keywords": \[/keywords": [ "gen-class", "generator", "cli" /' *e.json`
4. Change the license to MIT:  
   `sed -ix 's/: "ISC",/: "MIT",/' *e.json`
5. Insert five top-level placeholder properties before `"main"`, and then  
   insert six placeholder `"script"` properties before `"test"`:  
   `A=(§{1..5},\\n·);sed -ix "s/\"main/${A[*]}·\"main/;s/·/ /g" *e.json`  
   `A=(§{a..f},\\n···);sed -ix "s/\"test/${A[*]}·\"test/;s/·/ /g" *e.json`
6. Tell Node to use `import` not `require()` (avoids needing .mjs):  
   `sed -ix 's/§1/"type": "module"/' *e.json`
7. Tell NPM which files to include as part of the published package:  
   `sed -ix 's|§2|"files": [ "§0d.ts", "§0js", "bin/§0js" ]|' *e.json`
8. Specify the minimum supported Node.js version:  
   `sed -ix 's/§3/"engines": { "node": ">= 14.0.0" }/' *e.json`
9. Name the command, and point it to the start-script in the __bin/__ folder:  
   `sed -ix 's|§4|"bin": { "gen-class": "bin/§0js" }|' *e.json`
10. Display a warning if someone installs this package non-globally:  
    `sed -ix 's/§5/"preferGlobal": true/' *e.json`
11. The first script generates the main file, __gen-class.js__, and then  
    the second script generates the type declarations, __gen-class.d.ts__.  
    The third script is a shortcut to run both `"build:..."` scripts:  
    `sed -ix 's/§a/"§Z:§A": "rollup -c"/' *e.json`  
    `sed -ix 's/§b/"§Z:§B": "tsc §0js §_"/' *e.json`  
    `sed -ix 's/§_/--allowJs --declaration --emitDeclarationOnly/' *e.json`  
    `sed -ix 's/§c/"§Z": "for s in {§A,§B};do npm run §Z:$s;done"/' *e.json`  
    `sed -ix 's/§A/prod/g;s/§B/types/g;s/§Z/build/g;' *e.json`  
12. The fourth script runs unit tests on the main file, __gen-class.js__,  
    and the fifth script checks it against the type declarations.  
    The sixth script is a shortcut to run both `"preflight:..."` scripts:  
    `sed -ix 's/§d/"§Z:§D": "echo \"🧬 test.js\" \&\& "/' *e.json`  
    `sed -ix 's/§e/"§Z:§E": "tsc §0js §_"/' *e.json`  
    `sed -ix 's/§_/--allowJs --checkJs --noEmit/' *e.json`  
    `sed -ix 's/§f/"§Z": "for s in {§D,§E};do npm run §Z:$s;done"/' *e.json`  
    `sed -ix 's/§D/test/g;s/§E/types/g;s/§Z/preflight/g;' *e.json`  
13. The seventh script runs unit tests on the source code:  
    `sed -ix 's|Error: no test specified|🧪 src/test.js|' *e.json`  
    `sed -ix 's|exit 1|node src/test.js|' *e.json`
14. Replace `§0` with `gen-class.`:  
    `sed -ix 's/§0/gen-class./g' *e.json`
15. Insert the author’s name, email and domain:  
    `sed -ix 's/author": "/author": "0bdx <0@0bdx.com> (0bdx.com)/' *e.json`
16. Delete the temporary __package.jsonx__ file:  
    `rm package.jsonx`
17. Install two dev-dependencies:  
    `npm install @0bdx/build-helpers --save-dev` 0.0.4, 1 package, 22 kB for 6 items  
    `npm install rollup --save-dev` 3.15.0, 2 packages, 2.6 MB for 31 items  
18. Install one runtime dependency:  
    `npm install @0bdx/ainta` 0.0.18, 1 package, 114 kB for 7 items  

### __5. Fix the package name__

Change the `"name"` in package-lock.json (2 places) and package.json (1 place).  
From: `"gen-class"`  
To: `"@0bdx/gen-class"`
