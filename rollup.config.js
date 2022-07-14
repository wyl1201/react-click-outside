// rollup.config.js
import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"

export default defineConfig({
  input: "src/index.tsx",
  output: [
    {
      file: `lib/index.js`,
      format: "cjs",
      exports: "auto",
    },
    {
      file: `lib/index.esm.js`,
      format: "esm",
    },
  ],
  external: ["react"],
  plugins: [typescript({ tsconfig: "./tsconfig.esm.json" })],
})

