/** ### Generates JavaScript code, based on a JSON schema.
 *
 * @param {object} schema
 *    A schema object which defines a single JavaScript class.
 * @returns {{filename:string,content:string}}
 *    Returns an instruction for generating a JavaScript file.
 */
export function genClass(schema: object): {
    filename: string;
    content: string;
};
/**
 * https://www.npmjs.com/package/@0bdx/gen-class
 * @version 0.0.1
 * @license Copyright (c) 2023 0bdx <0@0bdx.com> (0bdx.com)
 * SPDX-License-Identifier: MIT
 */
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
export function runGenClassCli(argv: string[], dependencies: {
    readFileSync: Function;
    writeFileSync: Function;
}): string;
