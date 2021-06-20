export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  user: User;
  token: Scalars['String'];
};

/** input */
export type CreateTodoInput = {
  title: Scalars['String'];
  content: Scalars['String'];
};

/** input */
export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
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
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  allTodo: Array<Todo>;
  allUsers: Array<User>;
  me: User;
  todo: Todo;
};

export type QueryTodoArgs = {
  input: TodoIdInput;
};

export type RegisterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']>;
  activeTodo: Todo;
  deletedTodo: Todo;
  doneTodo: Todo;
  newAllTodo: Array<Todo>;
  newTodo: Todo;
  updatedTodo: Todo;
};

/** Todo */
export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  doneFlg: Scalars['Boolean'];
  userId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type TodoIdInput = {
  id: Scalars['Int'];
};

export type TodoResponse = {
  __typename?: 'TodoResponse';
  todo: Todo;
};

export type UpdateTodoInput = {
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
};

/** User */
export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
};
