import { TodoRepository } from "./todo-repository";

describe("TodoRepository", () => {
  beforeEach(() => {});

  afterAll(() => {
    // while (TodoRepository.findAll().length > 0) {
    //   TodoRepository.delete(TodoRepository.findAll()[0].id);
    // }
  });

  it("should create a todo item", () => {
    const todo = TodoRepository.create("Test Todo", "Description of Test Todo");
    expect(todo).toEqual({
      id: expect.any(Number),
      title: "Test Todo",
      description: "Description of Test Todo",
      done: false,
    });
  });

  it("should find a todo item by id", () => {
    // const createdTodo = TodoRepository.create("Test Todo", "Description");
    // const foundTodo = TodoRepository.findById(createdTodo.id);
    // expect(foundTodo).toEqual(createdTodo);
  });

  it("should return all todo items", () => {
    const firstTodo = TodoRepository.create("First Todo", "Description");
    const secondTodo = TodoRepository.create("Second Todo", "Description");
    expect(TodoRepository.findAll()).toEqual([firstTodo, secondTodo]);
  });

  it("should update a todo item", () => {
    // const todo = TodoRepository.create("Test Todo", "Description");
    // const updatedTodo = TodoRepository.update(
    //   todo.id,
    //   "Updated Todo",
    //   "Updated Description"
    // );
    // expect(updatedTodo).toEqual({
    //   id: todo.id,
    //   title: "Updated Todo",
    //   description: "Updated Description",
    //   done: false,
    // });
  });

  it("should delete a todo item", () => {
    // const todo = TodoRepository.create("Test Todo", "Description");
    // const deletedTodo = TodoRepository.delete(todo.id);
    // expect(deletedTodo).toEqual(todo);
    // expect(TodoRepository.findById(todo.id)).toBeUndefined();
  });
});
