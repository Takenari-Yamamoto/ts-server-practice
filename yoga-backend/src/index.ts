import { readFileSync } from "node:fs";
import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";
import { Resolvers } from "./generated/resolvers-types";
import { todoRepository } from "./repository/todo";

const typeDefs = readFileSync("schema/graphql/**.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    todos: () => todoRepository.getTodos(),
    todoById: (_, { id }) => todoRepository.todoById(id),
  },
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
