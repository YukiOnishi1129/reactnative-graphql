import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthenticateResponse = {
  __typename?: "AuthenticateResponse";
  user: User;
  token: Scalars["String"];
};

/** input */
export type CreateTodoInput = {
  title: Scalars["String"];
  content: Scalars["String"];
};

/** input */
export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  _empty?: Maybe<Scalars["String"]>;
  activeTodo: TodoResponse;
  createTodo: TodoResponse;
  deleteTodo: TodoResponse;
  doneTodo: TodoResponse;
  login: AuthenticateResponse;
  register: AuthenticateResponse;
  updateTodo: TodoResponse;
};

export type MutationActiveTodoArgs = {
  input: TodoIdInput;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: TodoIdInput;
};

export type MutationDoneTodoArgs = {
  input: TodoIdInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: "Query";
  _empty?: Maybe<Scalars["String"]>;
  allTodo: Array<Todo>;
  allUsers: Array<User>;
  me: User;
  todo: Todo;
};

export type QueryTodoArgs = {
  input: TodoIdInput;
};

export type RegisterInput = {
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  _empty?: Maybe<Scalars["String"]>;
  activeTodo: Todo;
  deletedTodo: Todo;
  doneTodo: Todo;
  newAllTodo: Array<Todo>;
  newTodo: Todo;
  updatedTodo: Todo;
};

/** Todo */
export type Todo = {
  __typename?: "Todo";
  id: Scalars["Int"];
  title: Scalars["String"];
  content: Scalars["String"];
  doneFlg: Scalars["Boolean"];
  userId: Scalars["Int"];
  createdAt: Scalars["DateTime"];
};

export type TodoIdInput = {
  id: Scalars["Int"];
};

export type TodoResponse = {
  __typename?: "TodoResponse";
  todo: Todo;
};

export type UpdateTodoInput = {
  id: Scalars["Int"];
  title: Scalars["String"];
  content: Scalars["String"];
};

/** User */
export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  name: Scalars["String"];
  email: Scalars["String"];
  avatar: Scalars["String"];
  createdAt: Scalars["DateTime"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticateResponse: ResolverTypeWrapper<AuthenticateResponse>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  CreateTodoInput: CreateTodoInput;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  Subscription: ResolverTypeWrapper<{}>;
  Todo: ResolverTypeWrapper<Todo>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  TodoIdInput: TodoIdInput;
  TodoResponse: ResolverTypeWrapper<TodoResponse>;
  UpdateTodoInput: UpdateTodoInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticateResponse: AuthenticateResponse;
  String: Scalars["String"];
  CreateTodoInput: CreateTodoInput;
  DateTime: Scalars["DateTime"];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  RegisterInput: RegisterInput;
  Subscription: {};
  Todo: Todo;
  Int: Scalars["Int"];
  Boolean: Scalars["Boolean"];
  TodoIdInput: TodoIdInput;
  TodoResponse: TodoResponse;
  UpdateTodoInput: UpdateTodoInput;
  User: User;
};

export type AuthenticateResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthenticateResponse"] = ResolversParentTypes["AuthenticateResponse"]
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  _empty?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  activeTodo?: Resolver<
    ResolversTypes["TodoResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationActiveTodoArgs, "input">
  >;
  createTodo?: Resolver<
    ResolversTypes["TodoResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoArgs, "input">
  >;
  deleteTodo?: Resolver<
    ResolversTypes["TodoResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTodoArgs, "input">
  >;
  doneTodo?: Resolver<
    ResolversTypes["TodoResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationDoneTodoArgs, "input">
  >;
  login?: Resolver<
    ResolversTypes["AuthenticateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "input">
  >;
  register?: Resolver<
    ResolversTypes["AuthenticateResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, "input">
  >;
  updateTodo?: Resolver<
    ResolversTypes["TodoResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  _empty?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  allTodo?: Resolver<Array<ResolversTypes["Todo"]>, ParentType, ContextType>;
  allUsers?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  todo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<QueryTodoArgs, "input">
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  _empty?: SubscriptionResolver<
    Maybe<ResolversTypes["String"]>,
    "_empty",
    ParentType,
    ContextType
  >;
  activeTodo?: SubscriptionResolver<
    ResolversTypes["Todo"],
    "activeTodo",
    ParentType,
    ContextType
  >;
  deletedTodo?: SubscriptionResolver<
    ResolversTypes["Todo"],
    "deletedTodo",
    ParentType,
    ContextType
  >;
  doneTodo?: SubscriptionResolver<
    ResolversTypes["Todo"],
    "doneTodo",
    ParentType,
    ContextType
  >;
  newAllTodo?: SubscriptionResolver<
    Array<ResolversTypes["Todo"]>,
    "newAllTodo",
    ParentType,
    ContextType
  >;
  newTodo?: SubscriptionResolver<
    ResolversTypes["Todo"],
    "newTodo",
    ParentType,
    ContextType
  >;
  updatedTodo?: SubscriptionResolver<
    ResolversTypes["Todo"],
    "updatedTodo",
    ParentType,
    ContextType
  >;
};

export type TodoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Todo"] = ResolversParentTypes["Todo"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  doneFlg?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TodoResponse"] = ResolversParentTypes["TodoResponse"]
> = {
  todo?: Resolver<ResolversTypes["Todo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticateResponse?: AuthenticateResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoResponse?: TodoResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
