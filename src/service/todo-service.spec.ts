import { TodoRepositoryIF } from "../repository/todo-repository";
import { TodoService } from "./todo-service";

describe(TodoService, () => {
  let mockRepository: TodoRepositoryIF;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
  });

  it("should create a todo item", () => {
    const service = TodoService(mockRepository);
    const title = "New Todo";
    const description = "Description of new todo";

    // モック関数の戻り値を設定
    mockRepository.create = jest
      .fn()
      .mockImplementation((title: string, description: string) => {
        return { id: 1, title, description };
      });

    const result = service.createTodo(title, description);

    expect(mockRepository.create).toHaveBeenCalledWith(title, description);
    expect(result).toEqual({ id: 1, title, description });
  });

  it("should retrieve all todo items", () => {
    const service = TodoService(mockRepository);
    const todos = [{ id: 1, title: "Todo 1", description: "Description 1" }];

    mockRepository.findAll = jest.fn().mockReturnValue(todos);

    const result = service.findAllTodos();

    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(todos);
  });

  it("should find a todo item by id", () => {
    const service = TodoService(mockRepository);
    const id = "xxx";
    const todo = { id, title: "Todo 1", description: "Description 1" };

    mockRepository.findById = jest.fn().mockReturnValue(todo);

    const result = service.findTodoById(id);

    expect(mockRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual(todo);
  });

  it("should update a todo item", () => {
    const service = TodoService(mockRepository);
    const updatedTodo = {
      id: "1",
      title: "Updated Todo",
      description: "Updated Description",
    };

    mockRepository.update = jest.fn().mockReturnValue(updatedTodo);

    const result = service.updateTodo(
      "1",
      "Updated Todo",
      "Updated Description"
    );

    expect(mockRepository.update).toHaveBeenCalledWith(
      "1",
      "Updated Todo",
      "Updated Description"
    );
    expect(result).toEqual(updatedTodo);
  });

  it("should delete a todo item", () => {
    const service = TodoService(mockRepository);
    const todoToDelete = {
      id: "1",
      title: "Todo 1",
      description: "Description 1",
    };

    mockRepository.delete = jest.fn().mockReturnValue(todoToDelete);

    const result = service.deleteTodo("1");

    expect(mockRepository.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual(todoToDelete);
  });
});
