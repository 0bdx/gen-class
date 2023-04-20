import { genClass } from "./index.js";

/** ### Wraps `genClass()` in a command line app.
 *
 * @param {string[]} argv
 *    Raw command-line arguments, typically Node.js's `process.argv`.
 * @param {{readFileSync:function,writeFileSync:function}} dependencies
 *    Functions for reading and writing files, typically Node.js's `fs` module.
 * @returns {string}
 *    Returns a short success message, which can be logged to `stdout`.
 * @throws
 *    Returns a short success message, which can be logged to `stderr`.
 */
export default function runGenClassCli(argv, dependencies) {
    const begin = 'runGenClassCli():';

    // Deal with '--help' or '--version'.
    if (argv.includes('--help')) return getHelp();
    if (argv.includes('--version')) return getVersion();

    // Get the input and output paths.
    // `output` defaults to 'src/' if '--output' is missing.
    const input = argv.find(a => a.slice(-5) === '.json');
    const outputPos = argv.indexOf('--output');
    const output = outputPos === -1 ? 'src' : argv[outputPos + 1];

    // Validate the input and output paths.
    if (!input || !output || output.includes('.'))
        throw Error(`${begin} Malformed command line arguments ${argv.join(' ')}`);

    // Load and parse the schema JSON file.
    const schemaRaw = dependencies.readFileSync(input);
    let schemaParsed;
    try { schemaParsed = JSON.parse(schemaRaw) } catch(err) {
        throw Error(`${begin} Malformed schema file '${input}'`)};

    // Make the parsed schema into an array, if it's not already.
    const schemas = Array.isArray(schemaParsed) ? schemaParsed : [schemaParsed];
    const len = schemas.length;

    // Get the instructions for writing the .js files, and then write each one.
    schemas
        .map(genClass)
        .map(({ filename, content }) =>
            dependencies.writeFileSync(`${output}/${filename}`, content))
    ;

    return `'${input}' generated ${len} file${len==1?'':'s'} in '${output}'`;
}


/* ----------------------------- Private methods ---------------------------- */

function getHelp() {
    return [
        '',
        '@0bdx/gen-class',
        '===============',
        '',
        'Generates files containing JavaScript classes and unit tests, ',
        'based on a JSON schema.',
        '',
        '',
        'Install and uninstall with npm',
        '------------------------------',
        '',
        'npm install @0bdx/gen-class --global',
        'npm uninstall @0bdx/gen-class --global',
        '',
        '',
        'Usage',
        '-----',
        '',
        'gen-class --help',
        '    Shows this help page.',
        '',
        'gen-class --version',
        '    Shows the version.',
        '',
        'gen-class basic-class.json',
        '    Generates one or more .js files in the top level of "src/".',
        '',
        'gen-class basic-class.json --output my/src/classes/',
        '    Generates one or more .js files in the output directory.',
        '',
    ].join('\n')
}

function getVersion() {
    return '@0bdx/gen-class 0.0.2';
}
