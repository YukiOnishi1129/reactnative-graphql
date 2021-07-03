import * as Types from "../types/schemas";

export type GetMyUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyUserQuery = { __typename?: "Query" } & {
  me: { __typename?: "User" } & GetUserFragment;
};

export type GetAllUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllUserQuery = { __typename?: "Query" } & {
  allUsers: Array<{ __typename?: "User" } & GetUserFragment>;
};

export type GetUserFragment = { __typename?: "User" } & Pick<
  Types.User,
  "id" | "name" | "email" | "avatar" | "createdAt"
>;

export type GetTodoDetailQueryVariables = Types.Exact<{
  todoIdInput: Types.TodoIdInput;
}>;

export type GetTodoDetailQuery = { __typename?: "Query" } & {
  todo: { __typename?: "Todo" } & GetTodoFragment;
};

export type GetAllTodoQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllTodoQuery = { __typename?: "Query" } & {
  allTodo: Array<{ __typename?: "Todo" } & GetTodoFragment>;
};

export type GetTodoFragment = { __typename?: "Todo" } & Pick<
  Types.Todo,
  "id" | "title" | "content" | "doneFlg" | "userId" | "createdAt"
>;

export type SignInMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;

export type SignInMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "AuthenticateResponse" } & Pick<
    Types.AuthenticateResponse,
    "token"
  > & { user: { __typename?: "User" } & GetUserFragment };
};

export type SignUpMutationVariables = Types.Exact<{
  registerInput: Types.RegisterInput;
}>;

export type SignUpMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "AuthenticateResponse" } & Pick<
    Types.AuthenticateResponse,
    "token"
  > & { user: { __typename?: "User" } & GetUserFragment };
};

export type AuthenticationMutationVariables = Types.Exact<{
  authInput: Types.AuthInput;
}>;

export type AuthenticationMutation = { __typename?: "Mutation" } & {
  authentication: { __typename?: "AuthenticateResponse" } & Pick<
    Types.AuthenticateResponse,
    "token"
  > & { user: { __typename?: "User" } & GetUserFragment };
};

export type CreateTodoMutationVariables = Types.Exact<{
  createTodoInput: Types.CreateTodoInput;
}>;

export type CreateTodoMutation = { __typename?: "Mutation" } & {
  createTodo: { __typename?: "TodoResponse" } & {
    todo: { __typename?: "Todo" } & GetTodoFragment;
  };
};

export type UpdateTodoMutationVariables = Types.Exact<{
  updateTodoInput: Types.UpdateTodoInput;
}>;

export type UpdateTodoMutation = { __typename?: "Mutation" } & {
  updateTodo: { __typename?: "TodoResponse" } & {
    todo: { __typename?: "Todo" } & GetTodoFragment;
  };
};

export type DoneTodoMutationVariables = Types.Exact<{
  doneTodoInput: Types.TodoIdInput;
}>;

export type DoneTodoMutation = { __typename?: "Mutation" } & {
  doneTodo: { __typename?: "TodoResponse" } & {
    todo: { __typename?: "Todo" } & GetTodoFragment;
  };
};

export type ActiveTodoMutationVariables = Types.Exact<{
  activeTodoInput: Types.TodoIdInput;
}>;

export type ActiveTodoMutation = { __typename?: "Mutation" } & {
  activeTodo: { __typename?: "TodoResponse" } & {
    todo: { __typename?: "Todo" } & GetTodoFragment;
  };
};

export type DeleteTodoMutationVariables = Types.Exact<{
  deleteTodoInput: Types.TodoIdInput;
}>;

export type DeleteTodoMutation = { __typename?: "Mutation" } & {
  deleteTodo: { __typename?: "TodoResponse" } & {
    todo: { __typename?: "Todo" } & GetTodoFragment;
  };
};

export type NewTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type NewTodoSubscription = { __typename?: "Subscription" } & {
  newTodo: { __typename?: "Todo" } & GetTodoFragment;
};

export type UpdatedTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type UpdatedTodoSubscription = { __typename?: "Subscription" } & {
  updatedTodo: { __typename?: "Todo" } & GetTodoFragment;
};

export type HaveDoneTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type HaveDoneTodoSubscription = { __typename?: "Subscription" } & {
  doneTodo: { __typename?: "Todo" } & GetTodoFragment;
};

export type HaveActiveTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type HaveActiveTodoSubscription = { __typename?: "Subscription" } & {
  activeTodo: { __typename?: "Todo" } & GetTodoFragment;
};

export type DeletedTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type DeletedTodoSubscription = { __typename?: "Subscription" } & {
  deletedTodo: { __typename?: "Todo" } & GetTodoFragment;
};

export type NewAllTodoSubscriptionVariables = Types.Exact<{
  [key: string]: never;
}>;

export type NewAllTodoSubscription = { __typename?: "Subscription" } & {
  newAllTodo: Array<{ __typename?: "Todo" } & GetTodoFragment>;
};
