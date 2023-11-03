import { db } from "./db/db";
import { todos } from "./db/schema";

async function main() {
  const res = db
    .insert(todos)
    .values({
      name: "test",
      isCompleted: 0,
    })
    .run();
  console.log(res);

  // 追加
  const allTodo = db.select().from(todos).all();
  console.log(allTodo);
}

main();
