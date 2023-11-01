import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "../schema/graphql/**/schema.graphql",
  generates: {
    "src/generated": defineConfig(),
  },
};

export default config;
