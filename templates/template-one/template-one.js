import narrowAintas, { aintaNumber } from '@0bdx/ainta';

/** ### A class with an instance method defined in another file.
 * 
 * For JSDoc+TS, the `constructor()` should always be defined here.
 */
export default class TemplateOne {

    /** A non-negative integer. The instance's position in some list. */
    index;

    /** ### Creates a `TemplateOne` instance from the supplied arguments.
     * 
     * @param {number} index
     *    A non-negative integer. The instance's position in some list.
     */
    constructor(index) {
        const begin = 'new TemplateOne()';

        // Validate each argument.
        const [ aResults, aNum ] = narrowAintas({ begin }, aintaNumber);
        aNum(index, 'index', { gte:0, lte:Number.MAX_SAFE_INTEGER - 1, mod:1 });
        if (aResults.length) throw Error(aResults.join('\n'));

        // Store the validated arguments as properties.
        this.index = index;

        // Prevent this instance from being modified.
        Object.freeze(this);
    }
}

/** ### Stringifies the `TemplateOne` instance to a JSON string.
 * @param {number} [indent=0]
 *    Number of spaces to indent. Defaults to zero.
 * @returns {string}
 */
TemplateOne.prototype.toJSON = function toJSON(indent) {
    console.error('template-one-to-json.js should override this', indent);
    return '';
};
