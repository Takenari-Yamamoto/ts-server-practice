import { dbClient } from "../database/connection";
import { TodoRepository } from "../repository/todo-repository";
import { TodoService } from "../service/todo-service";

(async () => {
  const repo = TodoRepository(dbClient);
  const service = TodoService(repo);

  const created = await service.createTodo("ほげ", "Description of new todo");

  console.log("created", created);
  process.exit(0);
})();
