module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  tabWidth: 2,
  insertPragma: false,
  singleQuote: true,
  endOfLine: "lf",
  arrowParens: "avoid",
  trailingComma: "none",
  printWidth: 80,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};