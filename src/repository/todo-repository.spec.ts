import {
  connection,
  createTestDb,
  deleteTestDb,
  migrateTestDb,
  testDbClient,
} from "../database/utils/test-db-connection";
import { TodoRepository } from "./todo-repository";

describe("TodoRepository", () => {
  beforeAll(async () => {
    await createTestDb();
    await migrateTestDb();
  });

  beforeEach(() => {
    // ダミーデータ挿入
  });

  afterAll(async () => {
    await deleteTestDb();
  });

  it("作成ができること", async () => {
    // テストコード
    const repo = TodoRepository(testDbClient);
    const newTodo = await repo.create("Test Todo", "This is a test");
    expect(newTodo).toBeDefined();
    expect(newTodo.title).toBe("Test Todo");
  });
});
