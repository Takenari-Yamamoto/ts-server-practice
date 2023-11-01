import { readFileSync } from "node:fs";
import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { resolvers } from "./generated/resolvers.generated";
import { typeDefs } from "./generated/typeDefs.generated";

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
