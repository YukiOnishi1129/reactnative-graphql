/**
 * TodoListTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { InputForm } from '@Component/common/InputForm';
import { ActionButton } from '@Component/common/ActionButton';
/* graphql */
import {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDoneTodoMutation,
  useActiveTodoMutation,
  useDeleteTodoMutation,
} from '@Hook/useGraphQL';

/* logics */
import { showAlertDialog } from '@Logic/CommonLogics';

/**
 * TodoListTemplate
 * @returns
 */
export const TodoListTemplate: React.VFC = () => {
  /* graphql query */
  const getAllTodoQuery = useGetAllTodoQuery();
  /* graphql mutation */
  const [createTodoMutation] = useCreateTodoMutation();

  /* local */
  const [inputTodo, setInputTodo] = React.useState('');

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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BaseScreen>
      {getAllTodoQuery.loading && <Text>Loading...</Text>}
      {getAllTodoQuery.error && <Text>{getAllTodoQuery?.error}</Text>}
      <Text style={styles.title}>TodoList</Text>

      <View style={styles.inputFrom}>
        <View style={styles.inputArea}>
          <InputForm label="Todoタイトル" value={inputTodo} onChangeText={onChangeInputTodo} />
        </View>
        <View style={styles.ButtonArea}>
          <ActionButton title="Todo追加" onPress={onAddTodo} />
        </View>
      </View>
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
    marginTop: 50,
    marginBottom: 50,
  },
  inputArea: {
    marginBottom: 20,
  },
  ButtonArea: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
