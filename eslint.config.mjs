
// eslint.config.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    js.configs.recommended,

    {
        plugins: {
            react,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
    },

    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                project: "./tsconfig.json",
            },
            globals: {
                console: "readonly",
                document: "readonly",
                process: "readonly",
                localStorage: "readonly"
            },
        },
        // ...
    },

    {
        rules: {
            quotes: ["error", "double"],
        },
    },
];
