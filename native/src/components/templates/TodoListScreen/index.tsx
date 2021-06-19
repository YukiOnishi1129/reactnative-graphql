/**
 * TodoListTemplate
 * @package components
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
import { BaseScreen } from '@Component/layouts/BaseScreen';

/**
 * TodoListTemplate
 * @returns
 */
export const TodoListTemplate: React.VFC = () => {
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */

  return (
    <BaseScreen>
      <Text>TodoListTemplate</Text>
    </BaseScreen>
  );
};
