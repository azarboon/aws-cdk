const baseConfig = require("@aws-cdk/cdk-build-tools/config/eslintrc");
baseConfig.ignorePatterns.push("lib/init-templates/**/typescript/**/*.ts");
baseConfig.ignorePatterns.push("test/integ/cli/sam_cdk_integ_app/**/*.ts");
baseConfig.parserOptions.project = __dirname + "/tsconfig.json";

// custom rules
baseConfig.rules["@cdklabs/no-throw-default-error"] = ["error"];
baseConfig.overrides.push({
  files: ["./test/**"],
  rules: {
    "@cdklabs/no-throw-default-error": "off",
  },
});

module.exports = baseConfig;
