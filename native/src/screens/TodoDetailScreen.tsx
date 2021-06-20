/**
 * TodoDetailScreen
 * @package screens
 */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
/* components */
import { TodoDetailTemplate } from '@Component/templates/TodoDetailScreen';
/* types */
import { RootStackParamListType } from '@Type/navigation';

/**
 * props
 */
type Props = {
  navigation: StackNavigationProp<RootStackParamListType, 'TodoDetail'>;
  route: RouteProp<RootStackParamListType, 'TodoDetail'>;
};

/**
 * TodoDetailScreen
 * @param props
 * @returns
 */
export const TodoDetailScreen: React.VFC<Props> = ({ route }: Props) => {
  /* routes */
  const todoId = route.params.todoId;

  return <TodoDetailTemplate todoId={todoId} />;
};
