/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",

    coverageReporters: ["json", "html"],

    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/cypress/"],
};

export default config;
