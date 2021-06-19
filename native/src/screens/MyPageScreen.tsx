/**
 * MyPageScreen
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
import { MyPageTemplate } from '@Component/templates/MyPageScreen';

export const MyPageScreen: React.VFC = () => {
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */

  return <MyPageTemplate />;
};
