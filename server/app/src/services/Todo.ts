/**
 * TodoService
 * @package service
 */
require("module-alias/register");
import { getRepository } from "typeorm";
/* models */
import { TodoModel } from "@Models/Todo";

/**
 * getTodo
 * @param {number} todoId
 * @param {number} userId
 * @returns
 */
export const getTodo = async (todoId: number, userId: number) => {
  const todoRepository = getRepository(TodoModel);
  try {
    const todo = await todoRepository.findOne({
      where: { id: todoId, userId: userId, deleteFlg: 0 },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};

/**
 * getTodoList
 * @param {string} userId
 * @returns
 */
export const getTodoList = async (userId: number) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const todoList = await todoRepository.find({
      where: { userId: userId, deleteFlg: 0 },
      order: { createdAt: "DESC" },
    });

    return todoList;
  } catch (error) {
    console.log(error);
  }
};

/**
 * createTodo
 * @param title
 * @param content
 * @param userId
 * @returns
 */
export const createTodo = async (
  title: string,
  content: string,
  userId: number
) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const todo = await todoRepository.save({
      title: title,
      content: content,
      userId: userId,
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};

/**
 * updateTodo
 * @param id
 * @param title
 * @param content
 * @returns
 */
export const updateTodo = async (
  id: number,
  title: string,
  content: string
) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const result = await todoRepository.update(
      {
        id: id,
      },
      { title: title, content: content }
    );

    if (!result) return;

    const todo = await todoRepository.findOne({
      where: { id: id, deleteFlg: 0 },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};

/**
 * doneTodo
 * @param id
 * @returns
 */
export const doneTodo = async (id: number) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const result = await todoRepository.update(
      {
        id: id,
      },
      { doneFlg: true }
    );

    if (!result) return;

    const todo = await todoRepository.findOne({
      where: { id: id, deleteFlg: 0 },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};

/**
 * activeTodo
 * @param id
 * @returns
 */
export const activeTodo = async (id: number) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const result = await todoRepository.update(
      {
        id: id,
      },
      { doneFlg: false }
    );

    if (!result) return;

    const todo = await todoRepository.findOne({
      where: { id: id, deleteFlg: 0 },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};

/**
 * deleteTodo
 * @param id
 * @returns
 */
export const deleteTodo = async (id: number) => {
  const todoRepository = getRepository(TodoModel);

  try {
    const result = await todoRepository.update(
      {
        id: id,
      },
      { deleteFlg: true }
    );

    if (!result) return;

    const todo = await todoRepository.findOne({
      where: { id: id, deleteFlg: true },
    });

    return todo;
  } catch (error) {
    console.log(error);
  }
};
