module.exports = {
  rules: {
    /*
     * Color
     */

    /*
     * https://stylelint.io/user-guide/rules/list/color-hex-case
     *
     * Specify lowercase or uppercase for hex colors (Autofixable).
     */
    'color-hex-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/color-hex-length
     *
     * Specify short or long notation for hex colors (Autofixable).
     */
    'color-hex-length': 'short',

    /*
     * Font family
     */

    /*
     * https://stylelint.io/user-guide/rules/list/font-family-name-quotes
     *
     * Specify whether or not quotation marks should be used around font family names.
     */
    'font-family-name-quotes': 'always-where-recommended',

    /*
     * Function
     */

    /*
     * https://stylelint.io/user-guide/rules/list/function-comma-newline-after
     *
     * Require a newline or disallow whitespace after the commas of functions (Autofixable).
     */
    'function-comma-newline-after': 'always-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/function-comma-newline-before
     *
     * Require a newline or disallow whitespace before the commas of functions (Autofixable).
     */
    'function-comma-newline-before': 'never-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/function-comma-space-after
     *
     * Require a single space or disallow whitespace after the commas of functions (Autofixable).
     */
    'function-comma-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/function-comma-space-before
     *
     * Require a single space or disallow whitespace before the commas of functions (Autofixable).
     */
    'function-comma-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/function-max-empty-lines
     *
     * Limit the number of adjacent empty lines within functions (Autofixable).
     */
    'function-max-empty-lines': 0,

    /*
     * https://stylelint.io/user-guide/rules/list/function-name-case
     *
     * Specify lowercase or uppercase for function names (Autofixable).
     */
    'function-name-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/function-parentheses-newline-inside
     *
     * Require a newline or disallow whitespace on the inside of the parentheses of functions
     * (Autofixable).
     */
    'function-parentheses-newline-inside': 'always-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside
     *
     * Require a single space or disallow whitespace on the inside of the parentheses of functions
     * (Autofixable).
     */
    'function-parentheses-space-inside': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/function-url-quotes
     *
     * Require or disallow quotes for urls.
     */
    'function-url-quotes': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/function-whitespace-after
     *
     * Require or disallow whitespace after functions (Autofixable).
     */
    'function-whitespace-after': 'always',

    /*
     * Number
     */

    /*
     * https://stylelint.io/user-guide/rules/list/number-leading-zero
     *
     * Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
     */
    'number-leading-zero': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/number-no-trailing-zeros
     *
     * Disallow trailing zeros in numbers (Autofixable).
     */
    'number-no-trailing-zeros': true,

    /*
     * String
     */

    /*
     * https://stylelint.io/user-guide/rules/list/string-quotes
     *
     * Specify single or double quotes around strings (Autofixable).
     */
    'string-quotes': 'single',

    /*
     * Unit
     */

    /*
     * https://stylelint.io/user-guide/rules/list/unit-case
     *
     * Specify lowercase or uppercase for units (Autofixable).
     */
    'unit-case': 'lower',

    /*
     * Value
     */

    /*
     * https://stylelint.io/user-guide/rules/list/value-keyword-case
     *
     * Specify lowercase or uppercase for keywords values (Autofixable).
     */
    'value-keyword-case': 'lower',

    /*
     * Value list
     */

    /*
     * https://stylelint.io/user-guide/rules/list/value-list-comma-newline-after
     *
     * Require a newline or disallow whitespace after the commas of value lists (Autofixable).
     */
    'value-list-comma-newline-after': 'always-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/value-list-comma-newline-before
     *
     * Require a newline or disallow whitespace before the commas of value lists.
     */
    'value-list-comma-newline-before': 'never-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/value-list-comma-space-after
     *
     * Require a single space or disallow whitespace after the commas of value lists (Autofixable).
     */
    'value-list-comma-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/value-list-comma-space-before
     *
     * Require a single space or disallow whitespace before the commas of value lists (Autofixable).
     */
    'value-list-comma-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/value-list-max-empty-lines
     *
     * Limit the number of adjacent empty lines within value lists (Autofixable).
     */
    'value-list-max-empty-lines': 0,

    /*
     * Custom property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/custom-property-empty-line-before
     *
     * Require or disallow an empty line before custom properties (Autofixable).
     */
    'custom-property-empty-line-before': null,

    /*
     * Property
     */

    /*
     * https://stylelint.io/user-guide/rules/list/property-case
     *
     * Specify lowercase or uppercase for properties (Autofixable).
     */
    'property-case': 'lower',

    /*
     * Declaration
     */

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-bang-space-after
     *
     * Require a single space or disallow whitespace after the bang of declarations (Autofixable).
     */
    'declaration-bang-space-after': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-bang-space-before
     *
     * Require a single space or disallow whitespace before the bang of declarations (Autofixable).
     */
    'declaration-bang-space-before': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-colon-newline-after
     *
     * Require a newline or disallow whitespace after the colon of declarations (Autofixable).
     */
    'declaration-colon-newline-after': 'always-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-colon-space-after
     *
     * Require a single space or disallow whitespace after the colon of declarations (Autofixable).
     */
    'declaration-colon-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-colon-space-before
     *
     * Require a single space or disallow whitespace before the colon of declarations (Autofixable).
     */
    'declaration-colon-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-empty-line-before
     *
     * Require or disallow an empty line before declarations (Autofixable).
     */
    'declaration-empty-line-before': 'never',

    /*
     * Declaration block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-after
     *
     * Require a newline or disallow whitespace after the semicolons of declaration blocks
     * (Autofixable).
     */
    'declaration-block-semicolon-newline-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-newline-before
     *
     * Require a newline or disallow whitespace before the semicolons of declaration blocks.
     */
    'declaration-block-semicolon-newline-before': 'never-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-after
     *
     * Require a single space or disallow whitespace after the semicolons of declaration blocks
     * (Autofixable).
     */
    'declaration-block-semicolon-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-semicolon-space-before
     *
     * Require a single space or disallow whitespace before the semicolons of declaration blocks
     * (Autofixable).
     */
    'declaration-block-semicolon-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/declaration-block-trailing-semicolon
     *
     * Require or disallow a trailing semicolon within declaration blocks (Autofixable).
     */
    'declaration-block-trailing-semicolon': 'always',

    /*
     * Block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-empty-line-before
     *
     * Require or disallow an empty line before the closing brace of blocks (Autofixable).
     */
    'block-closing-brace-empty-line-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-after
     *
     * Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
     */
    'block-closing-brace-newline-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-before
     *
     * Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).
     */
    'block-closing-brace-newline-before': null,

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-space-after
     *
     * Require a single space or disallow whitespace after the closing brace of blocks.
     */
    'block-closing-brace-space-after': null,

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-space-before
     *
     * Require a single space or disallow whitespace before the closing brace of blocks
     * (Autofixable).
     */
    'block-closing-brace-space-before': null,

    /*
     * https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-after
     *
     * Require a newline after the opening brace of blocks (Autofixable).
     */
    'block-opening-brace-newline-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/block-opening-brace-newline-before
     *
     * Require a newline or disallow whitespace before the opening brace of blocks (Autofixable).
     */
    'block-opening-brace-newline-before': null,

    /*
     * https://stylelint.io/user-guide/rules/list/block-opening-brace-space-after
     *
     * Require a single space or disallow whitespace after the opening brace of blocks
     * (Autofixable).
     */
    'block-opening-brace-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/block-opening-brace-space-before
     *
     * Require a single space or disallow whitespace before the opening brace of blocks
     * (Autofixable).
     */
    'block-opening-brace-space-before': 'always-single-line',

    /*
     * Selector
     */

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-brackets-space-inside
     *
     * Require a single space or disallow whitespace on the inside of the brackets within attribute
     * selectors (Autofixable).
     */
    'selector-attribute-brackets-space-inside': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-operator-space-after
     *
     * Require a single space or disallow whitespace after operators within attribute selectors
     * (Autofixable).
     */
    'selector-attribute-operator-space-after': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-operator-space-before
     *
     * Require a single space or disallow whitespace before operators within attribute selectors
     * (Autofixable).
     */
    'selector-attribute-operator-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-attribute-quotes
     *
     * Require or disallow quotes for attribute values.
     */
    'selector-attribute-quotes': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-combinator-space-after
     *
     * Require a single space or disallow whitespace after the combinators of selectors
     * (Autofixable).
     */
    'selector-combinator-space-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-combinator-space-before
     *
     * Require a single space or disallow whitespace before the combinators of selectors
     * (Autofixable).
     */
    'selector-combinator-space-before': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-descendant-combinator-no-non-space
     *
     * Disallow non-space characters for descendant combinators of selectors (Autofixable).
     */
    'selector-descendant-combinator-no-non-space': true,

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-case
     *
     * Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
     */
    'selector-pseudo-class-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-class-parentheses-space-inside
     *
     * Require a single space or disallow whitespace on the inside of the parentheses within
     * pseudo-class selectors (Autofixable).
     */
    'selector-pseudo-class-parentheses-space-inside': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-pseudo-element-case
     *
     * Specify lowercase or uppercase for pseudo-element selectors (Autofixable).
     */
    'selector-pseudo-element-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-type-case
     *
     * Specify lowercase or uppercase for type selectors (Autofixable).
     */
    'selector-type-case': 'lower',

    /*
     * Selector list
     */

    /*
     * https://stylelint.io/user-guide/rules/list/selector-list-comma-newline-after
     *
     * Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
     */
    'selector-list-comma-newline-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-list-comma-newline-before
     *
     * Require a newline or disallow whitespace before the commas of selector lists (Autofixable).
     */
    'selector-list-comma-newline-before': 'never-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-list-comma-space-after
     *
     * Require a single space or disallow whitespace after the commas of selector lists
     * (Autofixable).
     */
    'selector-list-comma-space-after': 'always-single-line',

    /*
     * https://stylelint.io/user-guide/rules/list/selector-list-comma-space-before
     *
     * Require a single space or disallow whitespace before the commas of selector lists
     * (Autofixable).
     */
    'selector-list-comma-space-before': 'never',

    /*
     * Rule
     */

    /*
     * https://stylelint.io/user-guide/rules/list/rule-empty-line-before
     *
     * Require or disallow an empty line before rules (Autofixable).
     */
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    /*
     * Media feature
     */

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-colon-space-after
     *
     * Require a single space or disallow whitespace after the colon in media features
     * (Autofixable).
     */
    'media-feature-colon-space-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-colon-space-before
     *
     * Require a single space or disallow whitespace before the colon in media features
     * (Autofixable).
     */
    'media-feature-colon-space-before': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-name-case
     *
     * Specify lowercase or uppercase for media feature names (Autofixable).
     */
    'media-feature-name-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-parentheses-space-inside
     *
     * Require a single space or disallow whitespace on the inside of the parentheses within media
     * features (Autofixable).
     */
    'media-feature-parentheses-space-inside': 'never',

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-after
     *
     * Require a single space or disallow whitespace after the range operator in media features
     * (Autofixable).
     */
    'media-feature-range-operator-space-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/media-feature-range-operator-space-before
     *
     * Require a single space or disallow whitespace before the range operator in media features
     * (Autofixable).
     */
    'media-feature-range-operator-space-before': 'always',

    /*
     * Media query list
     */

    /*
     * https://stylelint.io/user-guide/rules/list/media-query-list-comma-newline-after
     *
     * Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
     */
    'media-query-list-comma-newline-after': null,

    /*
     * https://stylelint.io/user-guide/rules/list/media-query-list-comma-newline-before
     *
     * Require a newline or disallow whitespace before the commas of media query lists.
     */
    'media-query-list-comma-newline-before': 'never-multi-line',

    /*
     * https://stylelint.io/user-guide/rules/list/media-query-list-comma-space-after
     *
     * Require a single space or disallow whitespace after the commas of media query lists
     * (Autofixable).
     */
    'media-query-list-comma-space-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/media-query-list-comma-space-before
     *
     * Require a single space or disallow whitespace before the commas of media query lists
     * (Autofixable).
     */
    'media-query-list-comma-space-before': 'never',

    /*
     * At-rule
     */

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before
     *
     * Require or disallow an empty line before at-rules (Autofixable).
     */
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
    }],

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-name-case
     *
     * Specify lowercase or uppercase for at-rules names (Autofixable).
     */
    'at-rule-name-case': 'lower',

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-name-newline-after
     *
     * Require a newline after at-rule names.
     */
    'at-rule-name-newline-after': null,

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-name-space-after
     *
     * Require a single space after at-rule names (Autofixable).
     */
    'at-rule-name-space-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-semicolon-newline-after
     *
     * Require a newline after the semicolon of at-rules (Autofixable).
     */
    'at-rule-semicolon-newline-after': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-semicolon-space-before
     *
     * Require a single space or disallow whitespace before the semicolons of at-rules.
     */
    'at-rule-semicolon-space-before': 'never',

    /*
     * Comment
     */

    /*
     * https://stylelint.io/user-guide/rules/list/comment-empty-line-before
     *
     * Require or disallow an empty line before comments (Autofixable).
     */
    'comment-empty-line-before': 'always',

    /*
     * https://stylelint.io/user-guide/rules/list/comment-whitespace-inside
     *
     * Require or disallow whitespace on the inside of comment markers (Autofixable).
     */
    'comment-whitespace-inside': 'always',

    /*
     * General / Sheet
     */

    /*
     * https://stylelint.io/user-guide/rules/list/indentation
     *
     * Specify indentation (Autofixable).
     */
    indentation: 2,

    /*
     * https://stylelint.io/user-guide/rules/list/linebreaks
     *
     * Specify unix or windows linebreaks (Autofixable).
     */
    linebreaks: 'unix',

    /*
     * https://stylelint.io/user-guide/rules/list/max-empty-lines
     *
     * Limit the number of adjacent empty lines (Autofixable).
     */
    'max-empty-lines': 1,

    /*
     * https://stylelint.io/user-guide/rules/list/max-line-length
     *
     * Limit the length of a line.
     */
    'max-line-length': 100,

    /*
     * https://stylelint.io/user-guide/rules/list/no-eol-whitespace
     *
     * Disallow end-of-line whitespace (Autofixable).
     */
    'no-eol-whitespace': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-missing-end-of-source-newline
     *
     * Disallow missing end-of-source newlines (Autofixable).
     */
    'no-missing-end-of-source-newline': true,

    /*
     * https://stylelint.io/user-guide/rules/list/no-empty-first-line
     *
     * Disallow empty first lines (Autofixable).
     */
    'no-empty-first-line': true,

    /*
     * https://stylelint.io/user-guide/rules/list/unicode-bom
     *
     * Require or disallow Unicode BOM.
     */
    'unicode-bom': null,

    /*
     * https://stylelint.io/user-guide/rules/list/no-irregular-whitespace
     *
     * Disallow irregular whitespace.
     */
    'no-irregular-whitespace': true,
  },
};
