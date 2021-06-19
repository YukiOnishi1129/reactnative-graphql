/**
 * Todo
 * @package model
 */
require("module-alias/register");
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
/* models */
import { UserModel } from "@Models/User";
/* types */
import { TodoType } from "@Types/Todo";

@Entity("todo")
export class TodoModel implements TodoType {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column("varchar", { name: "title", length: 255 })
  public title!: string;

  @Column("varchar", { name: "content", length: 255 })
  public content!: string;

  @Column({ name: "done_flg", default: false })
  public doneFlg!: boolean;

  @Column({ name: "user_id" })
  public userId!: number;

  @ManyToOne(() => UserModel, (user) => user.todo)
  @JoinColumn({ name: "user_id" })
  user!: UserModel;

  @CreateDateColumn({ name: "created_at" })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  readonly updatedAt!: Date;

  @Column({ name: "delete_flg", default: false })
  public deleteFlg!: boolean;
}
