import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: packageJson.module,
        format: "cjs",
        sourcemap: true,
      },
    ],
    external: ['react-dom', 'react'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
       }),
    ],
  }
];


