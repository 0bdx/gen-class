# @0bdx/gen-class

__Generates files containing JavaScript classes and unit tests, based on a JSON schema.__

∅&nbsp; __Version:__ 0.0.2  
∅&nbsp; __NPM:__ <https://www.npmjs.com/package/@0bdx/gen-class>  
∅&nbsp; __Repo:__ <https://github.com/0bdx/gen-class>  
∅&nbsp; __Homepage:__ <https://0bdx.com/gen-class>

@TODO add an overview

## Installation and usage

`gen-class` can be installed as dependency for programmatic use,
or as a command line app.

### __Installing and using as a dev-dependency__

```sh
npm install @0bdx/gen-class --save-dev
```

```js
import genClass from '@0bdx/gen-class';

console.log(genClass({
    name: 'BasicClass',
    instance: {
        scalars: [
            { isOk: { type: 'boolean' } }
        ]
    }
}));
```

### __Installing and using as a command line app__

```sh
npm install @0bdx/gen-class --global
gen-class --version # @0bdx/gen-class 0.0.2
gen-class --help
```

Make a folder called 'my/src/classes/', and a file called 'basic-class.json':
```json
{
    "name": "BasicClass",
    "instance": {
        "scalars": [
            { "isOk": { type: "boolean" } }
        ]
    }
}
```

```sh
gen-class my-class-definitions.json --output my/src/classes/
```

### __Uninstalling the command line app__

```sh
npm uninstall @0bdx/gen-class --global
gen-class --version # No such file or directory
```
