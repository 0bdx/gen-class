import TemplateOne from './template-one.js';

/** ### Stringifies the `TemplateOne` instance to a JSON string.
 * @param {number} [indent=0]
 *    Number of spaces to indent. Defaults to zero.
 * @returns {string}
 */
TemplateOne.prototype.toJSON = function toJSON(indent=0) {
    return jsonFromIndex(indent, this.index)
}

const jsonFromIndex = (indent, index) => [
    '{',
    `${' '.repeat(indent)}"index":${indent?' ':''}${index}`,
    '}',
].join(indent ? '\n' : '');

/* ---------------------------------- Test ---------------------------------- */

/** ### `TemplateOne.toJSON()` unit tests.
 * 
 * @param {typeof TemplateOne} C
 *    The `TemplateOne` class, because `TemplateOne` in alike.js !== `TemplateOne` in src/.
 * @returns {void}
 *    Does not return anything.
 * @throws {Error}
 *    Throws an `Error` if a test fails.
 */
export function templateToJsonTest(C) {
    const e2l = e => (e.stack.split('\n')[2].match(/([^\/]+\.js:\d+):\d+\)?$/)||[])[1];
    const equal = (actual, expected) => { if (actual === expected) return;
        try { throw Error() } catch(err) { throw Error(`actual:\n${actual}\n` +
            `!== expected:\n${expected}\n...at ${e2l(err)}\n`) } };
    const toLines = (...lines) => lines.join('\n');

    // Xx.
    equal(new C(0).toJSON(0), toLines(
        `{"index":0}`,
    ));
    equal(new C(77).toJSON(4), toLines(
        `{`,
        `    "index": 77`,
        `}`,
    ));
}
