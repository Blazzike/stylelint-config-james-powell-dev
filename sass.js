/* eslint-disable max-len */

module.exports = {
  plugins: [
    require.resolve('stylelint-scss'),
  ],
  extends: [
    '.',
  ].map(require.resolve),
  rules: {
    /*
     * Block
     */

    /*
     * https://stylelint.io/user-guide/rules/list/block-closing-brace-newline-after
     *
     * Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
     */
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],

    /*
     * Color
     */

    /*
     * https://stylelint.io/user-guide/rules/list/color-function-notation
     *
     * Specify modern or legacy notation for applicable color-functions (Autofixable).
     */
    'color-function-notation': null,

    /*
     * At-rule
     */

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
     *
     * Disallow unknown at-rules.
     */
    'at-rule-no-unknown': null,

    /*
     * https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before
     *
     * Require or disallow an empty line before at-rules (Autofixable).
     */
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignoreAtRules: ['else'],
    }],

    /*
     * Comment
     */

    /*
     * https://stylelint.io/user-guide/rules/list/comment-no-empty
     *
     * Disallow empty comments.
     */
    'comment-no-empty': null,

    /*
     * General / Sheet
     */

    /*
     * https://stylelint.io/user-guide/rules/list/max-nesting-depth
     *
     * Limit the depth of nesting.
     */
    'max-nesting-depth': [2, {
      ignoreAtRules: [
        'if',
        'for',
        'each',
        'media',
        'supports',
        'include',
      ],
    }],

    /*
     * String
     */

    /*
     * https://stylelint.io/user-guide/rules/list/string-no-newline
     *
     * Disallow (unescaped) newlines in strings.
     */
    'string-no-newline': null,

    /*
     * General / Sheet
     */

    /*
     * https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule
     *
     * Disallow invalid position
     */
    'no-invalid-position-at-import-rule': null,

    /*
     * stylelint-scss rules
     *
     * @-each
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
     *
     * This is a rule that checks for situations where users have done a loop using map-keys and
     * grabbed the value for that key inside of the loop.
     */
    'scss/at-each-key-value-single-line': true,

    /*
     * @-else
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md
     *
     * Require or disallow a newline after the closing brace of @else statements (Autofixable).
     */
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md
     *
     * Require a single space or disallow whitespace after the closing brace of @else statements
     * (Autofixable).
     */
    'scss/at-else-closing-brace-space-after': 'always-intermediate',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md
     *
     * Require an empty line or disallow empty lines before @-else (Autofixable).
     */
    'scss/at-else-empty-line-before': 'never',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md
     *
     * Require or disallow a space before @else if parentheses (Autofixable).
     */
    'scss/at-else-if-parentheses-space-before': 'always',

    /*
     * @-extend
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
     *
     * Disallow at-extends (@extend) with missing placeholders.
     */
    'scss/at-extend-no-missing-placeholder': true,

    /*
     * @-function
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md
     *
     * Require named parameters in SCSS function call rule.
     */
    'scss/at-function-named-arguments': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md
     *
     * Require or disallow a space before @function parentheses (Autofixable).
     */
    'scss/at-function-parentheses-space-before': 'never',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
     *
     * Specify a pattern for Sass/SCSS-like function names.
     */
    'scss/at-function-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * @-if
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md
     *
     * Require or disallow a newline after the closing brace of @if statements (Autofixable).
     */
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md
     *
     * Require a single space or disallow whitespace after the closing brace of @if statements
     * (Autofixable).
     */
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
     *
     * Disallow null in @if statements.
     */
    'scss/at-if-no-null': true,

    /*
     * @-import
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
     *
     * Disallow leading underscore in partial names in @import.
     */
    'scss/at-import-no-partial-leading-underscore': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
     *
     * Require or disallow extension in @import commands.
     */
    'scss/at-import-partial-extension': 'never',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
     *
     * Specify blacklist of disallowed file extensions for
     * partial names in @import commands.
     */
    'scss/at-import-partial-extension-blacklist': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md
     *
     * Specify whitelist of allowed file extensions for partial names in @import commands.
     */
    'scss/at-import-partial-extension-whitelist': null,

    /*
     * @-mixin
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
     *
     * Require or disallow parentheses in argumentless @mixin calls (Autofixable).
     */
    'scss/at-mixin-argumentless-call-parentheses': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md
     *
     * Require named parameters in at-mixin call rule.
     */
    'scss/at-mixin-named-arguments': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md
     *
     * Require or disallow a space before @mixin parentheses (Autofixable).
     */
    'scss/at-mixin-parentheses-space-before': 'never',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
     *
     * Specify a pattern for Sass/SCSS-like mixin names.
     */
    'scss/at-mixin-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * @-rule
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
     *
     * Disallow parentheses in conditional @ rules (if, elsif, while) (Autofixable).
     */
    'scss/at-rule-conditional-no-parentheses': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
     *
     * Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
     */
    'scss/at-rule-no-unknown': true,

    /*
     * $-variable
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md
     *
     * Require a newline after the colon in $-variable declarations (Autofixable).
     */
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
     *
     * Require or disallow whitespace after the colon in $-variable declarations (Autofixable).
     */
    'scss/dollar-variable-colon-space-after': 'always',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md
     *
     * Require a single space or disallow whitespace before the colon in $-variable declarations (Autofixable).
     */
    'scss/dollar-variable-colon-space-before': 'never',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md
     *
     * Require !default flag for $-variable declarations.
     */
    'scss/dollar-variable-default': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md
     *
     * Require a single empty line or disallow empty lines after $-variable declarations (Autofixable).
     */
    'scss/dollar-variable-empty-line-after': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
     *
     * Require a single empty line or disallow empty lines before $-variable declarations (Autofixable).
     */
    'scss/dollar-variable-empty-line-before': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md
     *
     * Require for variables to be put first in a block (a rule or in root).
     */
    'scss/dollar-variable-first-in-block': [true, {
      except: ['root'],
    }],

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
     *
     * Disallow Sass variables that are used without interpolation with CSS features that use custom
     * identifiers.
     */
    'scss/dollar-variable-no-missing-interpolation': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
     *
     * Specify a pattern for Sass-like variables.
     */
    'scss/dollar-variable-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * %-placeholder
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md
     *
     * Specify a pattern for %-placeholders.
     */
    'scss/percent-placeholder-pattern': '^(?!-)[a-z]+(?:[a-z0-9-]+)?(?<!-)$',

    /*
     * //-comment
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md
     *
     * Require or disallow an empty line before //-comments
     * (Autofixable).
     */
    'scss/double-slash-comment-empty-line-before': 'always',

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-inline/README.md
     *
     * Require or disallow //-comments to be inline comments.
     */
    'scss/double-slash-comment-inline': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md
     *
     * Require or disallow whitespace after the // in //-comments
     */
    'scss/double-slash-comment-whitespace-inside': 'always',

    /*
     * Comment
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
     *
     * Disallow empty comments.
     */
    'scss/comment-no-empty': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
     *
     * Disallow /*-comments.
     */
    'scss/comment-no-loud': null,

    /*
     * Declaration
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
     *
     * Require or disallow properties with - in their names to be in a form of a nested group.
     */
    'scss/declaration-nested-properties': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md
     *
     * Disallow nested properties of the same "namespace" be divided into multiple groups.
     */
    'scss/declaration-nested-properties-no-divided-groups': null,

    /*
     * Dimension
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
     *
     * Disallow non-numeric values when interpolating a value with a unit.
     */
    'scss/dimension-no-non-numeric-values': true,

    /*
     * Function
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
     *
     * Encourage the use of the scale-color function over regular color functions.
     */
    'scss/function-color-relative': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
     *
     * Disallow quoted strings inside the quote function (Autofixable).
     */
    'scss/function-quote-no-quoted-strings-inside': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
     *
     * Disallow unquoted strings inside the unquote function (Autofixable).
     */
    'scss/function-unquote-no-unquoted-strings-inside': true,

    /*
     * Map
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md
     *
     * Require quoted keys in Sass maps.
     */
    'scss/map-keys-quotes': 'always',

    /*
     * Media feature
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
     *
     * Require a media feature value be a $-variable or disallow $-variables in media feature
     * values.
     */
    'scss/media-feature-value-dollar-variable': null,

    /*
     * Operator
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md
     *
     * Disallow linebreaks after Sass operators.
     */
    'scss/operator-no-newline-after': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
     *
     * Disallow linebreaks before Sass operators.
     */
    'scss/operator-no-newline-before': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md
     *
     * Disallow unspaced operators in Sass operations.
     */
    'scss/operator-no-unspaced': true,

    /*
     * Partial
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import/README.md
     *
     * Disallow non-CSS @imports in partial files.
     */
    'scss/partial-no-import': null,

    /*
     * Selector
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md
     *
     * Require or disallow nesting of combinators in selectors.
     */
    'scss/selector-nest-combinators': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
     *
     * Disallow redundant nesting selectors (&).
     */
    'scss/selector-no-redundant-nesting-selector': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
     *
     * Disallow union class names with the parent selector (&).
     */
    'scss/selector-no-union-class-name': null,

    /*
     * General / Sheet
     */

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md
     *
     * Disallow dollar variables within a stylesheet.
     */
    'scss/no-dollar-variables': null,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
     *
     * Disallow duplicate dollar variables within a stylesheet.
     */
    'scss/no-duplicate-dollar-variables': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
     *
     * Disallow duplicate mixins within a stylesheet.
     */
    'scss/no-duplicate-mixins': true,

    /*
     * https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
     *
     * Disallows the use of global function names, as these global functions are now located inside
     * built-in Sass modules.
     */
    'scss/no-global-function-names': true,
  },
};
