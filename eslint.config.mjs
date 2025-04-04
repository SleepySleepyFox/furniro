import js from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  react.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with Next.js
      "no-unused-vars": "warn",
      "quotes": ["error", "double"],
    },
  },
];

