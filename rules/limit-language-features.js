module.exports = {
  rules: {
    /*
     * Alpha-value
     */

    /*
     * https://stylelint.io/user-guide/rules/list/alpha-value-notation
     *
     * Specify percentage or number notation for alpha-values (Autofixable).
     */
    'alpha-value-notation': 'number',

    /*
     * Hue
     */

    /*
     * https://stylelint.io/user-guide/rules/list/hue-degree-notation
     *
     * Specify number or angle notation for degree hues (Autofixable).
     */
    'hue-degree-notation': 'angle',

    /*
     * Color
     */

    /*
     * https://stylelint.io/user-guide/rules/list/color-function-notation
     *
     * Specify modern or legacy notation for applicable color-functions (Autofixable).
     */
    'color-function-notation': 'modern',

    /*
     * https://stylelint.io/user-guide/rules/list/color-named
     *
     * Require (where possible) or disallow named colors.
     */
    'color-named': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/color-no-hex
     *
     * Disallow hex colors.
     */
    'color-no-hex': null,

    /*
     * Length
     */

    /*
     * https://stylelint.io/user-guide/rules/list/length-zero-no-unit
     *
     * Disallow units for zero lengths (Autofixable).
     */
    'length-zero-no-unit': true,

    /*
     * Font weight
     */

    /*
     * https://stylelint.io/user-guide/rules/list/font-weight-notation
     *
     * Require numeric or named (where possible)
     */
    'font-weight-notation': 'numeric',

    /*
     * Function
     */

    /*
     * https://stylelint.io/user-guide/rules/list/function-allowed-list
     *
     * Specify a list of allowed functions.
     */
    'function-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/function-disallowed-list
     *
     * Specify a list of disallowed functions.
     */
    'function-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/function-url-no-scheme-relative
     *
     * Disallow scheme-relative urls.
     */
    'function-url-no-scheme-relative': null,

    /*
     * https://stylelint.io/user-guide/rules/list/function-url-scheme-allowed-list
     *
     * Specify a list of allowed URL schemes.
     */
    'function-url-scheme-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/function-url-scheme-disallowed-list
     *
     * Specify a list of disallowed URL schemes.
     */
    'function-url-scheme-disallowed-list': ['http'],

    /*
     * Keyframes
     */

    /*
     * https://stylelint.io/user-guide/rules/list/keyframes-name-pattern
     *
     * Specify a pattern for keyframe names.
     */
    'keyframes-name-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * Number
     */

    /*
     * https://stylelint.io/user-guide/rules/list/number-max-precision
     *
     * Limit the number of decimal places allowed in numbers.
     */
    'number-max-precision': null,

    /*
     * Time
     */

    /*
     * https://stylelint.io/user-guide/rules/list/time-min-milliseconds
     *
     * Specify the minimum number of milliseconds for time values.
     */
    'time-min-milliseconds': null,

    /*
     * Unit
     */

    /*
     * https://stylelint.io/user-guide/rules/list/unit-allowed-list
     *
     * Specify a list of allowed units.
     */
    'unit-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/unit-disallowed-list
     *
     * Specify a list of disallowed units.
     */
    'unit-disallowed-list': null,

    /*
     * Shorthand property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values
     *
     * Disallow redundant values in shorthand properties (Autofixable).
     */
    'shorthand-property-no-redundant-values': true,

    /*
     * Value
     */

    /*
     * https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix
     *
     * Disallow vendor prefixes for values (Autofixable).
     */
    'value-no-vendor-prefix': true,

    /*
     * Custom property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/custom-property-pattern
     *
     * Specify a pattern for custom properties.
     */
    'custom-property-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * Property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/property-allowed-list
     *
     * Specify a list of allowed properties.
     */
    'property-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/property-disallowed-list
     *
     * Specify a list of disallowed properties.
     */
    'property-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix
     *
     * Disallow vendor prefixes for properties (Autofixable).
     */
    'property-no-vendor-prefix': true,

    /*
     * Declaration
     */

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
     *
     * Disallow longhand properties that can be combined into one shorthand property.
     */
    'declaration-block-no-redundant-longhand-properties': true,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-no-important
     *
     * Disallow !important within declarations.
     */
    'declaration-no-important': null,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-property-unit-allowed-list
     *
     * Specify a list of allowed property and unit pairs within declarations.
     */
    'declaration-property-unit-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-property-unit-disallowed-list
     *
     * Specify a list of disallowed property and unit pairs within declarations.
     */
    'declaration-property-unit-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-property-value-allowed-list
     *
     * Specify a list of allowed property and value pairs within declarations.
     */
    'declaration-property-value-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list
     *
     * Specify a list of disallowed property and value pairs within declarations.
     */
    'declaration-property-value-disallowed-list': {
      border: ['none'],
      'border-top': ['none'],
      'border-right': ['none'],
      'border-bottom': ['none'],
      'border-left': ['none'],
    },

    /*
     * Declaration block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations
     *
     * Limit the number of declarations within a single-line declaration block.
     */
    'declaration-block-single-line-max-declarations': 0,

    /*
     * Selector
     */

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-name-disallowed-list
     *
     * Specify a list of disallowed attribute names.
     */
    'selector-attribute-name-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-operator-allowed-list
     *
     * Specify a list of allowed attribute operators.
     */
    'selector-attribute-operator-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-operator-disallowed-list
     *
     * Specify a list of disallowed attribute operators.
     */
    'selector-attribute-operator-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-class-pattern
     *
     * Specify a pattern for class selectors.
     */
    'selector-class-pattern': '^(?!-)[a-z]+(?:[a-z0-9-:]+)?(?<!-)$',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-combinator-allowed-list
     *
     * Specify a list of allowed combinators.
     */
    'selector-combinator-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-combinator-disallowed-list
     *
     * Specify a list of disallowed combinators.
     */
    'selector-combinator-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-disallowed-list
     *
     * Specify a list of disallowed selectors.
     */
    'selector-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-id-pattern
     *
     * Specify a pattern for ID selectors.
     */
    'selector-id-pattern': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-attribute
     *
     * Limit the number of attribute selectors in a selector.
     */
    'selector-max-attribute': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-class
     *
     * Limit the number of classes in a selector.
     */
    'selector-max-class': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-combinators
     *
     * Limit the number of combinators in a selector.
     */
    'selector-max-combinators': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-compound-selectors
     *
     * Limit the number of compound selectors in a selector.
     */
    'selector-max-compound-selectors': 3,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-empty-lines
     *
     * Limit the number of adjacent empty lines within selectors (Autofixable).
     */
    'selector-max-empty-lines': 1,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-id
     *
     * Limit the number of ID selectors in a selector.
     */
    'selector-max-id': 0,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-pseudo-class
     *
     * Limit the number of pseudo-classes in a selector.
     */
    'selector-max-pseudo-class': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-specificity
     *
     * Limit the specificity of selectors.
     */
    'selector-max-specificity': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-type
     *
     * Limit the number of type in a selector.
     */
    'selector-max-type': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-max-universal
     *
     * Limit the number of universal selectors in a selector.
     */
    'selector-max-universal': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-nested-pattern
     *
     * Specify a pattern for the selectors of rules nested within rules.
     */
    'selector-nested-pattern': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type
     *
     * Disallow qualifying a selector by type.
     */
    'selector-no-qualifying-type': true,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix
     *
     * Disallow vendor prefixes for selectors (Autofixable).
     */
    'selector-no-vendor-prefix': true,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-allowed-list
     *
     * Specify a list of allowed pseudo-class selectors.
     */
    'selector-pseudo-class-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-disallowed-list
     *
     * Specify a list of disallowed pseudo-class selectors.
     */
    'selector-pseudo-class-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-allowed-list
     *
     * Specify a list of allowed pseudo-element selectors.
     */
    'selector-pseudo-element-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation
     *
     * Specify single or double colon notation for applicable pseudo-elements (Autofixable).
     */
    'selector-pseudo-element-colon-notation': null,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-disallowed-list
     *
     * Specify a list of disallowed pseudo-element selectors.
     */
    'selector-pseudo-element-disallowed-list': null,

    /*
     * Media feature
     */

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-allowed-list
     *
     * Specify a list of allowed media feature names.
     */
    'media-feature-name-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-disallowed-list
     *
     * Specify a list of disallowed media feature names.
     */
    'media-feature-name-disallowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix
     *
     * Disallow vendor prefixes for media feature names (Autofixable).
     */
    'media-feature-name-no-vendor-prefix': true,

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-value-allowed-list
     *
     * Specify a list of allowed media feature name and value pairs.
     */
    'media-feature-name-value-allowed-list': null,

    /*
     * Custom media
     */

    /*
     * https://stylelint.io/user-guide/rules/list/custom-media-pattern
     *
     * Specify a pattern for custom media query names.
     */
    'custom-media-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * At-rule
     */

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-allowed-list
     *
     * Specify a list of allowed at-rules.
     */
    'at-rule-allowed-list': null,

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-disallowed-list
     *
     * Specify a list of disallowed at-rules.
     */
    'at-rule-disallowed-list': ['debug'],

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-no-vendor-prefix
     *
     * Disallow vendor prefixes for at-rules (Autofixable).
     */
    'at-rule-no-vendor-prefix': true,

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-property-required-list
     *
     * Specify a list of required properties for an at-rule.
     */
    'at-rule-property-required-list': null,

    /*
     * Comment
     */

    /*
     * https://stylelint.io/user-guide/rules/list/comment-pattern
     *
     * Specify a pattern for comments.
     */
    'comment-pattern': null,

    /*
     * https://stylelint.io/user-guide/rules/list/comment-word-disallowed-list
     *
     * Specify a list of disallowed words within comments.
     */
    'comment-word-disallowed-list': null,

    /*
     * General / Sheet
     */

    /*
     * https://stylelint.io/user-guide/rules/list/max-nesting-depth
     *
     * Limit the depth of nesting.
     */
    'max-nesting-depth': [1, {
      ignoreAtRules: [
        'media',
        'supports',
      ],
    }],

    /*
     * https://stylelint.io/user-guide/rules/list/no-unknown-animations
     *
     * Disallow unknown animations.
     */
    'no-unknown-animations': true,
  },
};
