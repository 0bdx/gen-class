/** ### Generates JavaScript code, based on a JSON schema.
 *
 * @param {object} schema
 *    A schema object which defines a single JavaScript class.
 * @returns {{filename:string,content:string}}
 *    Returns an instruction for generating a JavaScript file.
 */
export default function genClass(schema) {
    const begin = 'genClass():';

    return {
        filename: `${schema.name.toLowerCase()}.js`,
        content: `export default class ${schema.name} {}`,
    };
}
