import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "../package.json";

export default {
  input: "index.js",
  plugins: [
    resolve(),
    commonjs(),
  ],
  output: [{
    file: pkg.main,
    format: "cjs",
    name: "pbf",
    exports: "default",
  }, {
    file: pkg.module,
    format: "esm",
    name: pkg.name,
  }],
};
