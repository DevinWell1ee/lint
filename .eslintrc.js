/**
 * @desc 参考配置：
 * @desc eslint 如何工作？[https://eslint.org/docs/developer-guide/working-with-rules]
 * @desc eslint 如何工作？如何新建自己的rule？[https://eslint.org/docs/developer-guide/working-with-rules]
 * @desc eslint code path analysis [https://eslint.org/docs/developer-guide/code-path-analysis]

 * @desc vue官方插件[https://github.com/vuejs/eslint-config-vue/blob/master/index.js]
 * @desc 腾讯云机翻[https://cloud.tencent.com/developer/section/1135590]
 */
module.exports = {
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 8,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
		node: true,
		jquery: true,
	},

	extends: [
		'plugin:vue/recommended',
		'airbnb-base',
		'prettier', // 避免vue 与 prettier冲突
	],
	globals: {
		document: false,
		navigator: false,
		window: false,
	},
	// “off” 或 0 - 关闭规则
	// “warn” 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	// “error” 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		indent: ['warn', 4],
		'max-len': [
			'error',
			{
				code: 120,
				tabWidth: 4,
			},
		],

		// enforces no braces where they can be omitted
		// https://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': 'off',

		// require parens in arrow function arguments
		// https://eslint.org/docs/rules/arrow-parens
		'arrow-parens': ['error', 'always'],

		// require space before/after arrow function's arrow
		// https://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': ['error', { before: true, after: true }],

		// verify super() callings in constructors
		'constructor-super': 'error',

		// enforce the spacing around the * in generator functions
		// https://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': ['error', { before: false, after: true }],

		// disallow modifying variables of class declarations
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow arrow functions where they could be confused with comparisons
		// https://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': [
			'error',
			{
				allowParens: true,
			},
		],

		// disallow modifying variables that are declared using const
		'no-const-assign': 'error',

		// disallow duplicate class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// disallow specific imports
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': [
			'off',
			{
				paths: [],
				patterns: [],
			},
		],

		// disallow to use this/super before super() calling in constructors.
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow useless computed property keys
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// disallow unnecessary constructor
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// disallow renaming import, export, and destructured assignments to the same name
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': [
			'error',
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],

		// require let or const instead of var
		'no-var': 'error',

		// require method and property shorthand syntax for object literals
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],

		// Prefer destructuring from arrays and objects
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': [
			'warn',
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// suggest using Reflect methods where applicable
		// https://eslint.org/docs/rules/prefer-reflect
		'prefer-reflect': 'off',

		// use rest parameters instead of arguments
		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'error',

		// suggest using the spread operator instead of .apply()
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// suggest using template literals instead of string concatenation
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',

		// enforce spacing between object rest-spread
		// https://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': ['error', 'never'],

		// import sorting
		// https://eslint.org/docs/rules/sort-imports
		'sort-imports': [
			'off',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],

		// enforce usage of spacing in template strings
		// https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': 'error',

		// enforces getter/setter pairs in objects
		'accessor-pairs': 'off',

		// enforces return statements in callbacks of array's methods
		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': 'off',

		// treat var statements as if they were block scoped
		'block-scoped-var': 'error',

		// specify curly brace conventions for all control statements
		curly: ['error', 'multi-line'], // multiline

		// require default case in switch statements
		'default-case': ['error', { commentPattern: '^no default$' }],

		// Enforce default clauses in switch statements to be last
		// https://eslint.org/docs/rules/default-case-last
		'default-case-last': 'off',

		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'off',

		// encourages use of dot notation whenever possible
		'dot-notation': ['error', { allowKeywords: true }],

		// enforces consistent newlines before or after dots
		// https://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// require the use of === and !==
		// https://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['error', 'always', { null: 'ignore' }],

		// Require grouped accessor pairs in object literals and classes
		// https://eslint.org/docs/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': 'off',

		// make sure for-in loops have an if statement
		'guard-for-in': 'error',

		// enforce a maximum number of classes per file
		// https://eslint.org/docs/rules/max-classes-per-file
		'max-classes-per-file': ['error', 1],

		// disallow the use of alert, confirm, and prompt
		'no-alert': 'warn',

		// disallow use of arguments.caller or arguments.callee
		'no-caller': 'error',

		// disallow lexical declarations in case/default clauses
		// https://eslint.org/docs/rules/no-case-declarations.html
		'no-case-declarations': 'error',

		// Disallow returning value in constructor
		// https://eslint.org/docs/rules/no-constructor-return
		'no-constructor-return': 'off',

		// disallow division operators explicitly at beginning of regular expression
		// https://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// disallow else after a return in an if
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['error', { allowElseIf: false }],

		// disallow empty functions, except for standalone funcs/arrows
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': [
			'error',
			{
				allow: ['arrowFunctions', 'functions', 'methods'],
			},
		],

		// disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// disallow comparisons to null without a type-checking operator
		'no-eq-null': 'off',

		// disallow use of eval()
		'no-eval': 'error',

		// disallow adding to native types
		'no-extend-native': 'error',

		// disallow unnecessary function binding
		'no-extra-bind': 'error',

		// disallow Unnecessary Labels
		// https://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// disallow fallthrough of case statements
		'no-fallthrough': 'error',

		// disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 'error',

		// disallow reassignments of native objects or read-only globals
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': ['error', { exceptions: [] }],
		// deprecated in favor of no-global-assign
		'no-native-reassign': 'off',

		// disallow implicit type conversions
		// https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': [
			'off',
			{
				boolean: false,
				number: true,
				string: true,
				allow: [],
			},
		],

		// disallow var and named functions in global scope
		// https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// disallow use of eval()-like methods
		'no-implied-eval': 'error',

		// disallow this keywords outside of classes or class-like objects
		'no-invalid-this': 'off',

		// disallow usage of __iterator__ property
		'no-iterator': 'error',

		// disallow use of labels for anything other then loops and switches
		'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

		// disallow unnecessary nested blocks
		'no-lone-blocks': 'error',

		// disallow creation of functions within loops
		'no-loop-func': 'error',

		// disallow magic numbers
		// https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': [
			'off',
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],

		// disallow use of multiple spaces
		'no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false,
			},
		],

		// disallow use of multiline strings
		'no-multi-str': 'error',

		// disallow usage of __proto__ property
		'no-proto': 'error',

		// disallow declaring the same variable more then once
		'no-redeclare': 'error',

		// disallow use of assignment in return statement
		'no-return-assign': ['error', 'always'],

		// disallow redundant `return await`
		'no-return-await': 'error',

		// disallow use of `javascript:` urls.
		'no-script-url': 'error',

		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',

		// disallow unmodified conditions of loops
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// disallow unused labels
		// https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// disallow unnecessary string escaping
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// disallow redundant return; keywords
		// https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// disallow use of void operator
		// https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// disallow use of the with statement
		'no-with': 'error',

		// require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

		// Suggest using named capture group in regular expression
		// https://eslint.org/docs/rules/prefer-named-capture-group
		'prefer-named-capture-group': 'off',

		// https://eslint.org/docs/rules/prefer-regex-literals
		'prefer-regex-literals': 'off',

		// require `await` in `async function` (note: this is a horrible rule that should never be used)
		// https://eslint.org/docs/rules/require-await
		'require-await': 'off',

		// Enforce the use of u flag on RegExp
		// https://eslint.org/docs/rules/require-unicode-regexp
		'require-unicode-regexp': 'off',

		// requires to declare all vars on top of their containing scope
		'vars-on-top': 'error',

		// require immediate function invocation to be wrapped in parentheses
		// https://eslint.org/docs/rules/wrap-iife.html
		'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'off',

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': 'error',

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'error',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'error',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

		// disallow use of variables before they are defined
		'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

		// require camel case names
		camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

		// require trailing commas in multiline object literals
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],

		// enforce one true brace style
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		// require spaces around operators
		'space-infix-ops': 'error',
		// Require or disallow spaces before/after unary operators
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		// require or disallow spaces inside parentheses
		'space-in-parens': ['error', 'never'],
		// require padding inside curly braces
		'object-curly-spacing': ['error', 'always'],
		// enforce line breaks between braces
		// https://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
				ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
				ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
				ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
			},
		],

		'operator-linebreak': ['error', 'after'],
		'vue/operator-linebreak': ['error', 'after'],

		'vue/space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'vue/space-in-parens': ['error', 'never'],
		'vue/object-curly-spacing': ['error', 'always'],
		// Enforce line breaks after opening and before closing block-level tags
		'vue/block-tag-newline': 'error',
		// Enforce the maximum number of attributes per line
		'vue/max-attributes-per-line': [
			'error',
			{
				// 单行一行最多三个属性
				singleline: {
					max: 3,
					allowFirstLine: true,
				},
				// 多行每一行最多一个属性
				multiline: {
					max: 1,
					allowFirstLine: false,
				},
			},
		],
		// 替换eslint max-len
		'vue/max-len': [
			'error',
			{
				code: 120,
				template: 120,
				tabWidth: 4,
			},
		],
		// vue template script indent
		'vue/html-indent': ['error', 4],
		'vue/script-indent': [
			'error',
			4,
			{
				baseIndent: 1,
				switchCase: 1,
			},
		],
		// Require template literals instead of string concatenation
		'vue/prefer-template': 'warn',

		'vue/space-infix-ops': 'error',
		'vue/object-curly-newline': [
			'error',
			{
				ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
				ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
				ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
				ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
			},
		],
		// enforce "same line" or "multiple line" on object properties.
		// https://eslint.org/docs/rules/object-property-newline
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'vue/object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		// 兼容现有代码对props的改动
		'vue/no-mutating-props': 'warn',
		// 标签禁用自闭合
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'never',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'vue/component-name-in-template-casing': [
			'error',
			'kebab-case',
			{
				registeredComponentsOnly: false,
				ignores: [],
			},
		],
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			},
		},
	],
};
