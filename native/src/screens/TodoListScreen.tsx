/**
 * TodoListScreen
 * @package screens
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
/* graphql */
import {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDoneTodoMutation,
  useActiveTodoMutation,
  useDeleteTodoMutation,
} from '@Hook/useGraphQL';
/* components */
import { TodoListTemplate } from '@Component/templates/TodoListScreen';

export const TodoListScreen: React.VFC = () => {
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */

  console.log(getAllTodoQuery.error);

  return <TodoListTemplate />;
};
