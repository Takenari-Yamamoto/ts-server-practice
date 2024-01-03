import { TodoRepository } from "../repository/todo-repository";
import { TodoService } from "../service/todo-service";

(async () => {
  const service = TodoService(TodoRepository);

  const created = await service.createTodo(
    "New Todo",
    "Description of new todo"
  );

  console.log("created", created);
})();
