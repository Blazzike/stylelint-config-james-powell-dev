module.exports = {
  rules: {
    /*
     * Color
     */

    /*
     * https://stylelint.io/user-guide/rules/list/color-no-invalid-hex
     *
     * Disallow invalid hex colors.
     */
    'color-no-invalid-hex': true,

    /*
     * Font family
     */

    /*
     * https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names
     *
     * Disallow duplicate font family names.
     */
    'font-family-no-duplicate-names': true,

    /*
     * https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword
     *
     * Disallow missing generic families in lists of font family names.
     */
    'font-family-no-missing-generic-family-keyword': true,

    /*
     * Named grid areas
     */

    /*
     * https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid
     *
     * Disallow invalid named grid areas.
     */
    'named-grid-areas-no-invalid': true,

    /*
     * Function
     */

    /*
     * https://stylelint.io/user-guide/rules/list/function-calc-no-invalid
     *
     * Disallow an invalid expression within calc functions.
     */
    'function-calc-no-invalid': true,

    /*
     * https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator
     *
     * Disallow an unspaced operator within calc functions.
     */
    'function-calc-no-unspaced-operator': true,

    /*
     * https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction
     *
     * Disallow direction values in linear-gradient() calls that are not valid according to the
     * standard syntax.
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /*
     * String
     */

    /*
     * https://stylelint.io/user-guide/rules/list/string-no-newline
     *
     * Disallow (unescaped) newlines in strings.
     */
    'string-no-newline': true,

    /*
     * Unit
     */

    /*
     * https://stylelint.io/user-guide/rules/list/unit-no-unknown
     *
     * Disallow unknown units.
     */
    'unit-no-unknown': true,

    /*
     * Property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/property-no-unknown
     *
     * Disallow unknown properties.
     */
    'property-no-unknown': true,

    /*
     * Keyframe declaration
     */

    /*
     * https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important
     *
     * Disallow
     */
    'keyframe-declaration-no-important': true,

    /*
     * Declaration block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties
     *
     * Disallow duplicate custom properties within declaration blocks.
     */
    'declaration-block-no-duplicate-custom-properties': true,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties
     *
     * Disallow duplicate properties within declaration blocks.
     */
    'declaration-block-no-duplicate-properties': null,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides
     *
     * Disallow shorthand properties that override related longhand properties.
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /*
     * Block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/block-no-empty
     *
     * Disallow empty blocks.
     */
    'block-no-empty': true,

    /*
     * Selector
     */

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown
     *
     * Disallow unknown pseudo-class selectors.
     */
    'selector-pseudo-class-no-unknown': true,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown
     *
     * Disallow unknown pseudo-element selectors.
     */
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep'],
    }],

    /*
     * https://stylelint.io/user-guide/rules/list/selector-type-no-unknown
     *
     * Disallow unknown type selectors.
     */
    'selector-type-no-unknown': true,

    /*
     * Media feature
     */

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown
     *
     * Disallow unknown media feature names.
     */
    'media-feature-name-no-unknown': true,

    /*
     * At-rule
     */

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
     *
     * Disallow unknown at-rules.
     */
    'at-rule-no-unknown': true,

    /*
     * Comment
     */

    /*
     * https://stylelint.io/user-guide/rules/list/comment-no-empty
     *
     * Disallow empty comments.
     */
    'comment-no-empty': true,

    /*
     * General / Sheet
     */

    /*
     * https://stylelint.io/user-guide/rules/list/no-descending-specificity
     *
     * Disallow selectors of lower specificity from coming after overriding selectors of higher
     * specificity.
     */
    'no-descending-specificity': null,

    /*
     * https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules
     *
     * Disallow duplicate
     */
    'no-duplicate-at-import-rules': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-duplicate-selectors
     *
     * Disallow duplicate selectors within a stylesheet.
     */
    'no-duplicate-selectors': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-empty-source
     *
     * Disallow empty sources.
     */
    'no-empty-source': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-extra-semicolons
     *
     * Disallow extra semicolons (Autofixable).
     */
    'no-extra-semicolons': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments
     *
     * Disallow double-slash comments (
     */
    'no-invalid-double-slash-comments': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
     *
     * Disallow invalid position
     */
    'no-invalid-position-at-import-rule': true,
  },
};
