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
      .mockReturnValue({ id: 1, title, description });

    const result = service.createTodo(title, description);

    expect(mockRepository.create).toHaveBeenCalledWith(title, description);
    expect(result).toEqual({ id: 1, title, description });
  });
});
