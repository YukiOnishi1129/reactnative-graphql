import { MigrationInterface, QueryRunner } from "typeorm";

export class table1624084694805 implements MigrationInterface {
  name = "table1624084694805";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `avatar` varchar(255) NOT NULL, `token` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `delete_flg` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `done_flg` tinyint NOT NULL DEFAULT 0, `user_id` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `delete_flg` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `todo` ADD CONSTRAINT `FK_9cb7989853c4cb7fe427db4b260` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `todo` DROP FOREIGN KEY `FK_9cb7989853c4cb7fe427db4b260`"
    );
    await queryRunner.query("DROP TABLE `todo`");
    await queryRunner.query(
      "DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`"
    );
    await queryRunner.query("DROP TABLE `users`");
  }
}
