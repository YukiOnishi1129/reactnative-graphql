/**
 * リゾルバ UserResolvers
 * @package graphql
 */
import { ApolloError } from "apollo-server-errors";
import { IResolvers } from "graphql-tools";
import bcrypt from "bcrypt";
/* graphql */
import { AuthenticateResponse, User as UserGraphQLType } from "../types";
/* service */
import {
  getMyUser,
  getAllUser,
  loginAuth,
  registerUser,
  isSameEmailUser,
  authTokenUser,
} from "@Services/User";
/* types */
import { ResolverContextType } from "@Types/Resolver";

/**
 * UserResolvers
 */
export const UserResolvers: IResolvers = {
  /**
   * Query
   */
  Query: {
    /**
     * me
     * @param parent
     * @param args
     * @param param2
     * @returns
     */
    async me(
      parent,
      args,
      { currentUser }: ResolverContextType
    ): Promise<UserGraphQLType | undefined> {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");

      const user = await getMyUser(currentUser.id);
      if (!user)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      };
    },

    /**
     * allUsers
     * @param parent
     * @param args
     * @param param2
     * @returns
     */
    async allUsers(
      parent,
      args,
      { currentUser }: ResolverContextType
    ): Promise<UserGraphQLType[]> {
      // 認証エラーチェック
      if (!currentUser) throw new ApolloError("認証エラーです。", "401");

      const data = await getAllUser();

      if (!data || data?.length === 0) return [];

      const userList: UserGraphQLType[] = data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt,
        };
      });

      return userList;
    },
  },

  /**
   * Mutation
   */
  Mutation: {
    /**
     * login
     * @param parent
     * @param args
     */
    async login(parent, args): Promise<AuthenticateResponse> {
      if (!args?.input?.email || !args?.input?.password)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      // ログイン処理
      const data = await loginAuth(args.input.email, args.input.password);
      if (!data)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      return {
        user: data.user,
        token: data.token,
      };
    },

    /**
     * register
     * @param parent
     * @param args
     * @returns
     */
    async register(parent, args): Promise<AuthenticateResponse> {
      if (!args?.input?.name || !args?.input?.email || !args?.input?.password)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      if (await isSameEmailUser(args.input.email)) {
        throw new ApolloError(
          "メールアドレスが同じユーザーが存在します。他のメールアドレスを登録してください。",
          "400"
        );
      }

      // パスワードのハッシュ化
      const hashPassword = await bcrypt.hash(args.input.password, 10);
      // トークン発行
      const token = Math.random().toString(32).substring(2);

      // 会員登録
      const data = await registerUser(
        args.input.name,
        args.input.email,
        hashPassword,
        token
      );

      if (!data)
        throw new ApolloError(
          "システムエラー。会員登録に失敗しました。",
          "400"
        );

      return {
        user: data.user,
        token: data.token,
      };
    },

    async authentication(parent, args) {
      if (!args?.input?.token)
        throw new ApolloError("リクエストパラメータエラーです。", "400");

      const user = await authTokenUser(args.input.token);

      if (!user) throw new ApolloError("認証エラー。", "401");

      return {
        user: user,
        token: args.input.token,
      };
    },
  },
};
