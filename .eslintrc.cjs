module.exports = {
  env: {
    node: true,
    es2022: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:astro/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: { project: './' }
    }
  },
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    },
    {
      files: ['**/*.stories.*'], // .stories ファイルに適用されるパターン
      rules: {
        '@typescript-eslint/naming-convention': 'off', // ルールを無効にする
      },
    },
    {
      files: ['**/*.d.ts'], // .stories ファイルに適用されるパターン
      rules: {
        '@typescript-eslint/naming-convention': 'off', // ルールを無効にする
      },
    },
  ],
  rules: {
    'sort-imports': 0,
    '@typescript-eslint/no-inferrable-types': 'error', // 型推論機能が使用できる場合に明示的に型を指定することを禁止
    // '@typescript-eslint/no-explicit-any': 'error', // any使用禁止
    // "@typescript-eslint/explicit-function-return-type": "error", // 関数の返り値の型を指定
    'no-undef': 'off', // 宣言されていない変数の参照は不問
    'no-unused-vars': 'off', // 未使用の変数の警告
    '@typescript-eslint/no-unused-vars': 'off', // 未使用の変数の警告
    'no-use-before-define': 'off', // まだ宣言されていない識別子への参照
    eqeqeq: 'warn', // ==,!= より ===,!== 推奨。
    semi: ['error', 'always'], // 文末のセミコロン必須
    quotes: ['error', 'single', { avoidEscape: true }], // クォーテーションはシングル
    'array-bracket-spacing': ['error', 'never'], // 配列を表すカッコ([])と中身の間にスペース挟んではいけない
    'comma-spacing': ['error', { before: false, after: true }], // コンマ前のスペースNG、コンマ後ろにスペース必要
    'unused-imports/no-unused-imports': 'warn', // 未使用のimportに対して警告
    'import/order': [
      2,
      { alphabetize: { order: 'asc', caseInsensitive: true } }
    ], // importしたモジュールは昇順
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^astro:.+']
      }
    ],
    'no-else-return': [2, { allowElseIf: false }], // if文の中でreturnがある場合に、elseを省略することを推奨
    'max-depth': [1, 3], // ネストされたブロックの最大の深さを3未満に制限
    /** 命名規則 */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // classやtypeなどはパスカルケース
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        // 変数名はキャメルケース
        selector: 'variable',
        format: ['camelCase']
      }
    ]
  }
};
