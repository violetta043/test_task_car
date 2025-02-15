module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/react-in-jsx-scope": "off",
  },
};
