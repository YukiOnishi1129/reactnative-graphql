/**
 * CreateUsers
 * @package db
 */
require("module-alias/register");
import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import bcrypt from "bcrypt";
/* models */
import { UserModel } from "@Models/User";
/* types */
import { UserType } from "@Types/User";

/**
 * CreateUsers
 */
export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // パスワードのハッシュ化
    const hashPassword = await bcrypt.hash("password", 10);
    const initUserState: Omit<UserType, "id">[] = [
      {
        name: "Timber",
        email: "timber@gmail.com",
        password: hashPassword,
        avatar: "",
        token: "htyvci21h",
      },
      {
        name: "bake",
        email: "bake@gmail.com",
        password: hashPassword,
        avatar: "",
        token: "ndgjt9hg",
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(UserModel)
      .values(initUserState)
      .execute();
  }
}
