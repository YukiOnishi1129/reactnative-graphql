/**
 * CreateTodoList
 * @package db
 */
require("module-alias/register");
import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
/* models */
import { TodoModel } from "@Models/Todo";
/* types */
import { TodoType } from "@Types/Todo";

/**
 * CreateTodoList
 */
export default class CreateTodoList implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const initTodoState: Pick<TodoType, "title" | "content" | "userId">[] = [
      {
        title: "タスク1",
        content: "タスク1の内容です。",
        userId: 1,
      },
      {
        title: "タスク2",
        content: "タスク2の内容です。",
        userId: 1,
      },
      {
        title: "タスク3",
        content: "タスク3の内容です。",
        userId: 1,
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(TodoModel)
      .values(initTodoState)
      .execute();
  }
}
