/** ### The main starter for the gen-class cli app.
 *
 * @param {string[]} argv
 *    Raw command-line arguments, typically Node.js's `process.argv`.
 * @returns {string}
 *    Returns a short message, describing success or failure.
 */
export default function genClass(argv) {
    const begin = 'genClass():';

    return `${begin} ok! ${argv.join()}`;
}
