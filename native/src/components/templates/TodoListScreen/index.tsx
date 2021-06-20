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

  if (getAllTodoQuery.error)
    return (
      <BaseScreen>
        <Text>エラー</Text>
      </BaseScreen>
    );

  return (
    <BaseScreen>
      <Text>TodoListTemplate</Text>
    </BaseScreen>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '80%',
    height: 40,
  },
});
