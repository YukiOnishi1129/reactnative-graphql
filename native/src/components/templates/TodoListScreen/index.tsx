/**
 * TodoListTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { InputForm } from '@Component/common/InputForm';
import { ActionButton } from '@Component/common/ActionButton';
import { ActiveTodo } from './organisms/ActiveTodo';
import { DoneTodo } from './organisms/DoneTodo';
/* hooks */
import {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useDoneTodoMutation,
  useActiveTodoMutation,
  useDeleteTodoMutation,
} from '@Hook/useGraphQL';
import { useCustomSubscription } from '@Hook/useCustomSubscription';
/* logics */
import { showAlertDialog, showConfirmDialog } from '@Logic/CommonLogics';

/**
 * TodoListTemplate
 * @returns
 */
export const TodoListTemplate: React.VFC = () => {
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */
  const [createTodoMutation] = useCreateTodoMutation();
  const [doneTodoMutation] = useDoneTodoMutation();
  const [activeTodoMutation] = useActiveTodoMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  /* graphql subscription */
  const {
    getTodoSubscription,
    getUpdatedTodoSubscription,
    getDoneTodoSubscription,
    getActiveTodoSubscription,
    getDeleteTodoSubscription,
  } = useCustomSubscription();

  /* local */
  const [inputTodo, setInputTodo] = React.useState('');

  React.useEffect(() => {
    getTodoSubscription;
    getUpdatedTodoSubscription;
    getDoneTodoSubscription;
    getActiveTodoSubscription;
    getDeleteTodoSubscription;
  }, [
    getTodoSubscription,
    getUpdatedTodoSubscription,
    getDoneTodoSubscription,
    getActiveTodoSubscription,
    getDeleteTodoSubscription,
  ]);

  /**
   * inputTodo変更処理
   * @param text
   */
  const onChangeInputTodo = (text: string) => {
    setInputTodo(text);
  };

  /**
   * Todo追加処理
   * @returns
   */
  const onAddTodo = async () => {
    if (inputTodo === '') {
      showAlertDialog('未入力', '入力値がありません。');
      return;
    }

    try {
      const result = await createTodoMutation({
        variables: {
          createTodoInput: {
            title: inputTodo,
            content: '',
          },
        },
      });

      if (!result.data) {
        showAlertDialog('Todo追加失敗', 'Todo追加できません');
        return;
      }

      showAlertDialog('Todo追加完了', 'Todoを追加しました。');
      // 初期化
      setInputTodo('');
      // Todoリスト再読み込み
      getAllTodoQuery.refetch();
    } catch (error) {
      console.log(error.message);
    }
  };

  /**
   * Todo完了
   * @param targetId
   */
  const onDoneTodo = async (targetId: number) => {
    await doneTodoMutation({
      variables: {
        doneTodoInput: {
          id: targetId,
        },
      },
    });

    showAlertDialog('Todo完了', `id: ${targetId}のTodoを完了しました。`);
    // Todoリスト再読み込み
    getAllTodoQuery.refetch();
  };

  /**
   * onActionTodo
   * @param targetId
   * @param doneFlg
   */
  const onActionTodo = async (targetId: number, doneFlg: boolean) => {
    if (!doneFlg) {
      await onDoneTodo(targetId);
    } else {
      await onActiveTodo(targetId);
    }
  };

  /**
   * Todo未完了
   * @param targetId
   */
  const onActiveTodo = async (targetId: number) => {
    await activeTodoMutation({
      variables: {
        activeTodoInput: {
          id: targetId,
        },
      },
    });

    showAlertDialog('Todo未完了', `id: ${targetId}のTodoを未完了しました。`);
    // Todoリスト再読み込み
    getAllTodoQuery.refetch();
  };

  /**
   * Todo削除処理
   * @param targetId
   */
  const onDeleteAction = (targetId: number) => {
    const onDeleteTodo = async () => {
      await deleteTodoMutation({
        variables: {
          deleteTodoInput: {
            id: targetId,
          },
        },
      });

      showAlertDialog('Todo削除', `id: ${targetId}のTodoを削除しました。`);
      // Todoリスト再読み込み
      getAllTodoQuery.refetch();
    };

    showConfirmDialog('Todo削除処理', `id: ${targetId}のTodoを削除しますか？`, () =>
      onDeleteTodo(),
    );
  };

  /**
   * Todo詳細画面へ遷移
   * @param targetId
   */
  const onMoveTodo = (targetId: number) => {
    console.log(targetId);
  };

  return (
    <BaseScreen>
      {getAllTodoQuery?.loading && <Text>Loading...</Text>}
      {getAllTodoQuery?.error && <Text>エラー</Text>}
      <Text style={styles.title}>TodoList</Text>

      <View style={styles.inputFrom}>
        <View>
          <InputForm label="Todoタイトル" value={inputTodo} onChangeText={onChangeInputTodo} />
        </View>
        <View style={styles.ButtonArea}>
          <ActionButton title="Todo追加" onPress={onAddTodo} />
        </View>
      </View>

      {getAllTodoQuery?.data?.allTodo && getAllTodoQuery.data.allTodo.length !== 0 && (
        <View style={styles.TodoListArea}>
          <ScrollView>
            {getAllTodoQuery.data.allTodo.map((todo) => {
              if (todo.doneFlg) {
                return (
                  <View key={todo.id} style={styles.todo}>
                    <DoneTodo
                      todo={todo}
                      onActionTodo={onActionTodo}
                      onMoveTodo={onMoveTodo}
                      onDeleteTodo={onDeleteAction}
                    />
                  </View>
                );
              } else {
                return (
                  <View key={todo.id} style={styles.todo}>
                    <ActiveTodo
                      todo={todo}
                      onActionTodo={onActionTodo}
                      onMoveTodo={onMoveTodo}
                      onDeleteTodo={onDeleteAction}
                    />
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
      )}
    </BaseScreen>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
  },
  inputFrom: {
    marginTop: 20,
  },
  ButtonArea: {
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  TodoListArea: {
    marginTop: 10,
    marginBottom: 10,
    height: 450,
  },
  todo: {
    marginBottom: 10,
  },
});
