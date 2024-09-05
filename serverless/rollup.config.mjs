import typescript from "rollup-plugin-typescript2";

/** @type {import("rollup").RollupOptions} */
export default [
    {
        input: "src/index.ts",
        output: {
            file: "index.js",
            format: "cjs",
        },
        plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    },
];
