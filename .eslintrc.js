module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest/globals": true,
        "cypress/globals": true
      },
    "extends": [ 
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:cypress/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "jest", "cypress"
    ],
    "rules": {
        "indent": [
            "error",
            2  
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "eqeqeq": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": [
            "error", "always"
        ],
        "arrow-spacing": [
            "error", { "before": true, "after": true }
        ],
        "no-console": "error",
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "off",
        "jest/expect-expect": [
            "error",
            {
                assertFunctionNames: ['expect', 'fc.assert'],
            }
          ],
    }
  }