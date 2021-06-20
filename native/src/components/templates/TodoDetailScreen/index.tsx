/**
 * TodoDetailTemplate
 * @package components
 */
import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* graphql */
import { useGetTodoDetailQuery, useUpdateTodoMutation } from '@Hook/useGraphQL';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { Detail } from './organisms/Detail';
/* logics */
import { showAlertDialog } from '@Logic/CommonLogics';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';

/**
 * props
 */
type Props = {
  todoId: number;
};

/**
 * TodoDetailTemplate
 * @param props
 * @returns
 */
export const TodoDetailTemplate: React.VFC<Props> = ({ todoId }: Props) => {
  /* navigation */
  const nav = useNavigation();
  /* graphql query */
  const getTodoQuery = useGetTodoDetailQuery({
    variables: {
      todoIdInput: {
        id: todoId,
      },
    },
  });
  /* graphql mutation */
  const [updateTodoMutation] = useUpdateTodoMutation();

  /**
   * Todo更新
   * @param title
   * @param content
   */
  const onUpdateTodo = async (title: string, content: string) => {
    await updateTodoMutation({
      variables: {
        updateTodoInput: {
          id: todoId,
          title: title,
          content: content,
        },
      },
    });

    showAlertDialog('Todo更新完了', `id: ${todoId}のTodoを更新しました。`);

    // TodoList画面へリダイレクト
    nav.navigate(NAVIGATION_NAME.TODO_LIST);
  };

  return (
    <BaseScreen>
      {getTodoQuery?.loading && <Text>Loading...</Text>}
      {getTodoQuery?.error && <Text>エラー</Text>}
      {getTodoQuery?.data?.todo && (
        <Detail todo={getTodoQuery.data.todo} onUpdateTodo={onUpdateTodo} />
      )}
    </BaseScreen>
  );
};
