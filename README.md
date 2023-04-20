# @0bdx/gen-class

__Generates files containing JavaScript classes and unit tests, based on a JSON schema.__

∅&nbsp; __Version:__ 0.0.1  
∅&nbsp; __NPM:__ <https://www.npmjs.com/package/@0bdx/gen-class>  
∅&nbsp; __Repo:__ <https://github.com/0bdx/gen-class>  
∅&nbsp; __Homepage:__ <https://0bdx.com/gen-class>

@TODO add an overview

## Installation and usage

`gen-class` can be installed as dependency for programmatic use,
or as a command line app.

### __Installation and usage as a dev-dependency__

```sh
npm install @0bdx/gen-class --save-dev
```

```js
import genClass from '@0bdx/gen-class';

console.log(genClass({
    name: 'MyClass',
    instance: {
        scalars: [
            { isOk: { type: 'boolean' } }
        ]
    }
}));
```

### __Installation and usage as a command line app__

Make a folder called 'my/src/classes/', and a file called 'basic-class.json':
```json
{
    "name": "MyClass",
    "instance": {
        "scalars": [
            { "isOk": { type: "boolean" } }
        ]
    }
}
```

```sh
npm install @0bdx/gen-class --global
gen-class --help
gen-class --version
gen-class examples/example-1/basic-class.json --output examples/example-1
gen-class my-class-definitions.json --output my/src/classes/
```
