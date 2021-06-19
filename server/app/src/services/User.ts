/**
 * UserService
 * @package service
 */
require("module-alias/register");
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
/* graphql */
import { User as UserGraphQLType, AuthenticateResponse } from "@GraphQL/types";
/* models */
import { UserModel } from "@Models/User";

/**
 * getMyUser
 * @param {number} userId
 * @returns
 */
export const getMyUser = async (
  userId: number
): Promise<UserModel | undefined> => {
  const userRepository = getRepository(UserModel);

  try {
    const user = await userRepository.findOne({
      where: { id: userId, deleteFlg: 0 },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

/**
 * getAllUser
 */
export const getAllUser = async (): Promise<UserModel[] | undefined> => {
  const userRepository = getRepository(UserModel);

  try {
    const userList = await userRepository.find({
      where: {
        deleteFlg: 0,
      },
    });

    return userList;
  } catch (error) {
    console.log(error);
  }
};

/**
 * トークン認証
 * @param {string} token
 * @returns
 */
export const authTokenUser = async (
  token: string
): Promise<UserGraphQLType | undefined> => {
  const userRepository = getRepository(UserModel);

  try {
    const user = await userRepository.findOne({
      where: { token: token, deleteFlg: 0 },
    });

    if (!user) return;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt,
    };
  } catch (error) {
    console.log(error);
  }
};

/**
 * ログイン
 * @param {string} email
 * @param {string} password
 * @returns
 */
export const loginAuth = async (
  email: string,
  password: string
): Promise<AuthenticateResponse | undefined> => {
  const userRepository = getRepository(UserModel);
  try {
    const user = await userRepository.findOne({
      where: { email: email, deleteFlg: 0 },
    });

    if (!user) return;

    if (await bcrypt.compare(password, user.password)) {
      return {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
        },
        token: user.token,
      };
    }

    console.log("パスワードが一致しない");
  } catch (error) {
    console.log(error);
  }
};

/**
 * 会員登録
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} token
 * @returns
 */
export const registerUser = async (
  name: string,
  email: string,
  password: string,
  token: string
): Promise<AuthenticateResponse | undefined> => {
  const userRepository = getRepository(UserModel);
  try {
    const user = await userRepository.save({
      name: name,
      email: email,
      password: password,
      avatar: "",
      token: token,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      },
      token: user.token,
    };
  } catch (error) {
    console.log(error);
  }
};

/**
 * 同一Emailのユーザー存在確認処理
 * @param email
 * @returns
 */
export const isSameEmailUser = async (email: string) => {
  const userRepository = getRepository(UserModel);

  try {
    const user = await userRepository.findOne({
      where: { email: email, deleteFlg: 0 },
    });

    if (!user) return false;

    return true;
  } catch (error) {
    console.log(error);
    return true;
  }
};
