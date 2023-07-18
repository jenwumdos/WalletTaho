// This is a non-ESM JS file, so this rule can't be followed.
/* eslint-disable @typescript-eslint/no-var-requires */
const {
 rules: {
    "@typescript-eslint/naming-convention":
      airbnbTypeScriptNamingConventionRules,
  },
} = require("eslint-config-airbnb-typescript/lib/shared")

const {
  rules: { "no-param-reassign": airbnbNoParamReassignRules },
} = require("eslint-config-airbnb-base/rules/best-practices")

const {
  rules: { "no-param-reassign": airbnbNoParamReassignRules },
