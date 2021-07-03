import * as Types from "../types/operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export const GetUserFragmentDoc = gql`
  fragment GetUser on User {
    id
    name
    email
    avatar
    createdAt
  }
`;
export const GetTodoFragmentDoc = gql`
  fragment GetTodo on Todo {
    id
    title
    content
    doneFlg
    userId
    createdAt
  }
`;
export const GetMyUserDocument = gql`
  query GetMyUser {
    me {
      ...GetUser
    }
  }
  ${GetUserFragmentDoc}
`;

/**
 * __useGetMyUserQuery__
 *
 * To run a query within a React component, call `useGetMyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetMyUserQuery,
    Types.GetMyUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetMyUserQuery, Types.GetMyUserQueryVariables>(
    GetMyUserDocument,
    options
  );
}
export function useGetMyUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetMyUserQuery,
    Types.GetMyUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetMyUserQuery,
    Types.GetMyUserQueryVariables
  >(GetMyUserDocument, options);
}
export type GetMyUserQueryHookResult = ReturnType<typeof useGetMyUserQuery>;
export type GetMyUserLazyQueryHookResult = ReturnType<
  typeof useGetMyUserLazyQuery
>;
export type GetMyUserQueryResult = Apollo.QueryResult<
  Types.GetMyUserQuery,
  Types.GetMyUserQueryVariables
>;
export const GetAllUserDocument = gql`
  query GetAllUser {
    allUsers {
      ... on User {
        ...GetUser
      }
    }
  }
  ${GetUserFragmentDoc}
`;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetAllUserQuery,
    Types.GetAllUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetAllUserQuery, Types.GetAllUserQueryVariables>(
    GetAllUserDocument,
    options
  );
}
export function useGetAllUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetAllUserQuery,
    Types.GetAllUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetAllUserQuery,
    Types.GetAllUserQueryVariables
  >(GetAllUserDocument, options);
}
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<
  typeof useGetAllUserLazyQuery
>;
export type GetAllUserQueryResult = Apollo.QueryResult<
  Types.GetAllUserQuery,
  Types.GetAllUserQueryVariables
>;
export const GetTodoDetailDocument = gql`
  query GetTodoDetail($todoIdInput: TodoIdInput!) {
    todo(input: $todoIdInput) {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useGetTodoDetailQuery__
 *
 * To run a query within a React component, call `useGetTodoDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoDetailQuery({
 *   variables: {
 *      todoIdInput: // value for 'todoIdInput'
 *   },
 * });
 */
export function useGetTodoDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.GetTodoDetailQuery,
    Types.GetTodoDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.GetTodoDetailQuery,
    Types.GetTodoDetailQueryVariables
  >(GetTodoDetailDocument, options);
}
export function useGetTodoDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetTodoDetailQuery,
    Types.GetTodoDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetTodoDetailQuery,
    Types.GetTodoDetailQueryVariables
  >(GetTodoDetailDocument, options);
}
export type GetTodoDetailQueryHookResult = ReturnType<
  typeof useGetTodoDetailQuery
>;
export type GetTodoDetailLazyQueryHookResult = ReturnType<
  typeof useGetTodoDetailLazyQuery
>;
export type GetTodoDetailQueryResult = Apollo.QueryResult<
  Types.GetTodoDetailQuery,
  Types.GetTodoDetailQueryVariables
>;
export const GetAllTodoDocument = gql`
  query GetAllTodo {
    allTodo {
      ... on Todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useGetAllTodoQuery__
 *
 * To run a query within a React component, call `useGetAllTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetAllTodoQuery,
    Types.GetAllTodoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetAllTodoQuery, Types.GetAllTodoQueryVariables>(
    GetAllTodoDocument,
    options
  );
}
export function useGetAllTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetAllTodoQuery,
    Types.GetAllTodoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetAllTodoQuery,
    Types.GetAllTodoQueryVariables
  >(GetAllTodoDocument, options);
}
export type GetAllTodoQueryHookResult = ReturnType<typeof useGetAllTodoQuery>;
export type GetAllTodoLazyQueryHookResult = ReturnType<
  typeof useGetAllTodoLazyQuery
>;
export type GetAllTodoQueryResult = Apollo.QueryResult<
  Types.GetAllTodoQuery,
  Types.GetAllTodoQueryVariables
>;
export const SignInDocument = gql`
  mutation SignIn($loginInput: LoginInput!) {
    login(input: $loginInput) {
      user {
        ...GetUser
      }
      token
    }
  }
  ${GetUserFragmentDoc}
`;
export type SignInMutationFn = Apollo.MutationFunction<
  Types.SignInMutation,
  Types.SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.SignInMutation,
    Types.SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.SignInMutation,
    Types.SignInMutationVariables
  >(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<Types.SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  Types.SignInMutation,
  Types.SignInMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($registerInput: RegisterInput!) {
    register(input: $registerInput) {
      user {
        ...GetUser
      }
      token
    }
  }
  ${GetUserFragmentDoc}
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  Types.SignUpMutation,
  Types.SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.SignUpMutation,
    Types.SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.SignUpMutation,
    Types.SignUpMutationVariables
  >(SignUpDocument, options);
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<Types.SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  Types.SignUpMutation,
  Types.SignUpMutationVariables
>;
export const AuthenticationDocument = gql`
  mutation Authentication($authInput: AuthInput!) {
    authentication(input: $authInput) {
      user {
        ...GetUser
      }
      token
    }
  }
  ${GetUserFragmentDoc}
`;
export type AuthenticationMutationFn = Apollo.MutationFunction<
  Types.AuthenticationMutation,
  Types.AuthenticationMutationVariables
>;

/**
 * __useAuthenticationMutation__
 *
 * To run a mutation, you first call `useAuthenticationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticationMutation, { data, loading, error }] = useAuthenticationMutation({
 *   variables: {
 *      authInput: // value for 'authInput'
 *   },
 * });
 */
export function useAuthenticationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AuthenticationMutation,
    Types.AuthenticationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.AuthenticationMutation,
    Types.AuthenticationMutationVariables
  >(AuthenticationDocument, options);
}
export type AuthenticationMutationHookResult = ReturnType<
  typeof useAuthenticationMutation
>;
export type AuthenticationMutationResult =
  Apollo.MutationResult<Types.AuthenticationMutation>;
export type AuthenticationMutationOptions = Apollo.BaseMutationOptions<
  Types.AuthenticationMutation,
  Types.AuthenticationMutationVariables
>;
export const CreateTodoDocument = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(input: $createTodoInput) {
      todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  Types.CreateTodoMutation,
  Types.CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      createTodoInput: // value for 'createTodoInput'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateTodoMutation,
    Types.CreateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.CreateTodoMutation,
    Types.CreateTodoMutationVariables
  >(CreateTodoDocument, options);
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<Types.CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateTodoMutation,
  Types.CreateTodoMutationVariables
>;
export const UpdateTodoDocument = gql`
  mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
    updateTodo(input: $updateTodoInput) {
      todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  Types.UpdateTodoMutation,
  Types.UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateTodoInput: // value for 'updateTodoInput'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTodoMutation,
    Types.UpdateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateTodoMutation,
    Types.UpdateTodoMutationVariables
  >(UpdateTodoDocument, options);
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<Types.UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTodoMutation,
  Types.UpdateTodoMutationVariables
>;
export const DoneTodoDocument = gql`
  mutation DoneTodo($doneTodoInput: TodoIdInput!) {
    doneTodo(input: $doneTodoInput) {
      todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;
export type DoneTodoMutationFn = Apollo.MutationFunction<
  Types.DoneTodoMutation,
  Types.DoneTodoMutationVariables
>;

/**
 * __useDoneTodoMutation__
 *
 * To run a mutation, you first call `useDoneTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDoneTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [doneTodoMutation, { data, loading, error }] = useDoneTodoMutation({
 *   variables: {
 *      doneTodoInput: // value for 'doneTodoInput'
 *   },
 * });
 */
export function useDoneTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DoneTodoMutation,
    Types.DoneTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DoneTodoMutation,
    Types.DoneTodoMutationVariables
  >(DoneTodoDocument, options);
}
export type DoneTodoMutationHookResult = ReturnType<typeof useDoneTodoMutation>;
export type DoneTodoMutationResult =
  Apollo.MutationResult<Types.DoneTodoMutation>;
export type DoneTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.DoneTodoMutation,
  Types.DoneTodoMutationVariables
>;
export const ActiveTodoDocument = gql`
  mutation ActiveTodo($activeTodoInput: TodoIdInput!) {
    activeTodo(input: $activeTodoInput) {
      todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;
export type ActiveTodoMutationFn = Apollo.MutationFunction<
  Types.ActiveTodoMutation,
  Types.ActiveTodoMutationVariables
>;

/**
 * __useActiveTodoMutation__
 *
 * To run a mutation, you first call `useActiveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeTodoMutation, { data, loading, error }] = useActiveTodoMutation({
 *   variables: {
 *      activeTodoInput: // value for 'activeTodoInput'
 *   },
 * });
 */
export function useActiveTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.ActiveTodoMutation,
    Types.ActiveTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.ActiveTodoMutation,
    Types.ActiveTodoMutationVariables
  >(ActiveTodoDocument, options);
}
export type ActiveTodoMutationHookResult = ReturnType<
  typeof useActiveTodoMutation
>;
export type ActiveTodoMutationResult =
  Apollo.MutationResult<Types.ActiveTodoMutation>;
export type ActiveTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.ActiveTodoMutation,
  Types.ActiveTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($deleteTodoInput: TodoIdInput!) {
    deleteTodo(input: $deleteTodoInput) {
      todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  Types.DeleteTodoMutation,
  Types.DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      deleteTodoInput: // value for 'deleteTodoInput'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteTodoMutation,
    Types.DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DeleteTodoMutation,
    Types.DeleteTodoMutationVariables
  >(DeleteTodoDocument, options);
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<Types.DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteTodoMutation,
  Types.DeleteTodoMutationVariables
>;
export const NewTodoDocument = gql`
  subscription NewTodo {
    newTodo {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useNewTodoSubscription__
 *
 * To run a query within a React component, call `useNewTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.NewTodoSubscription,
    Types.NewTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.NewTodoSubscription,
    Types.NewTodoSubscriptionVariables
  >(NewTodoDocument, options);
}
export type NewTodoSubscriptionHookResult = ReturnType<
  typeof useNewTodoSubscription
>;
export type NewTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.NewTodoSubscription>;
export const UpdatedTodoDocument = gql`
  subscription UpdatedTodo {
    updatedTodo {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useUpdatedTodoSubscription__
 *
 * To run a query within a React component, call `useUpdatedTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUpdatedTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.UpdatedTodoSubscription,
    Types.UpdatedTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.UpdatedTodoSubscription,
    Types.UpdatedTodoSubscriptionVariables
  >(UpdatedTodoDocument, options);
}
export type UpdatedTodoSubscriptionHookResult = ReturnType<
  typeof useUpdatedTodoSubscription
>;
export type UpdatedTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.UpdatedTodoSubscription>;
export const HaveDoneTodoDocument = gql`
  subscription HaveDoneTodo {
    doneTodo {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useHaveDoneTodoSubscription__
 *
 * To run a query within a React component, call `useHaveDoneTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHaveDoneTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHaveDoneTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHaveDoneTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.HaveDoneTodoSubscription,
    Types.HaveDoneTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.HaveDoneTodoSubscription,
    Types.HaveDoneTodoSubscriptionVariables
  >(HaveDoneTodoDocument, options);
}
export type HaveDoneTodoSubscriptionHookResult = ReturnType<
  typeof useHaveDoneTodoSubscription
>;
export type HaveDoneTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.HaveDoneTodoSubscription>;
export const HaveActiveTodoDocument = gql`
  subscription HaveActiveTodo {
    activeTodo {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useHaveActiveTodoSubscription__
 *
 * To run a query within a React component, call `useHaveActiveTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHaveActiveTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHaveActiveTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHaveActiveTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.HaveActiveTodoSubscription,
    Types.HaveActiveTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.HaveActiveTodoSubscription,
    Types.HaveActiveTodoSubscriptionVariables
  >(HaveActiveTodoDocument, options);
}
export type HaveActiveTodoSubscriptionHookResult = ReturnType<
  typeof useHaveActiveTodoSubscription
>;
export type HaveActiveTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.HaveActiveTodoSubscription>;
export const DeletedTodoDocument = gql`
  subscription DeletedTodo {
    deletedTodo {
      ...GetTodo
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useDeletedTodoSubscription__
 *
 * To run a query within a React component, call `useDeletedTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useDeletedTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.DeletedTodoSubscription,
    Types.DeletedTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.DeletedTodoSubscription,
    Types.DeletedTodoSubscriptionVariables
  >(DeletedTodoDocument, options);
}
export type DeletedTodoSubscriptionHookResult = ReturnType<
  typeof useDeletedTodoSubscription
>;
export type DeletedTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.DeletedTodoSubscription>;
export const NewAllTodoDocument = gql`
  subscription NewAllTodo {
    newAllTodo {
      ... on Todo {
        ...GetTodo
      }
    }
  }
  ${GetTodoFragmentDoc}
`;

/**
 * __useNewAllTodoSubscription__
 *
 * To run a query within a React component, call `useNewAllTodoSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewAllTodoSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewAllTodoSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewAllTodoSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Types.NewAllTodoSubscription,
    Types.NewAllTodoSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Types.NewAllTodoSubscription,
    Types.NewAllTodoSubscriptionVariables
  >(NewAllTodoDocument, options);
}
export type NewAllTodoSubscriptionHookResult = ReturnType<
  typeof useNewAllTodoSubscription
>;
export type NewAllTodoSubscriptionResult =
  Apollo.SubscriptionResult<Types.NewAllTodoSubscription>;
