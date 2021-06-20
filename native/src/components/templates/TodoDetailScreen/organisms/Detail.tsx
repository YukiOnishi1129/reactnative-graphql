/**
 * Detail
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
/* components */
import { InputForm } from '@Component/common/InputForm';
import { ActionButton } from '@Component/common/ActionButton';
/* types */
import { Query } from '@Type/schemas';

/**
 * props
 */
type Props = {
  todo: Query['todo'];
  onUpdateTodo: (title: string, content: string) => Promise<void>;
};

/**
 * Detail
 * @param props
 * @returns
 */
export const Detail: React.VFC<Props> = ({ todo, onUpdateTodo }: Props) => {
  /* local */
  const [inputTitle, setInputTitle] = React.useState(todo.title);
  const [inputContent, setInputContent] = React.useState(todo.content);

  /**
   * inputTitle変更処理
   * @param text
   */
  const onChangeInputTitle = (text: string) => {
    setInputTitle(text);
  };

  /**
   * inputContent変更処理
   * @param text
   */
  const onChangeInputContent = (text: string) => {
    setInputContent(text);
  };

  return (
    <View>
      <Text style={styles.title}>TodoDetail</Text>
      <View style={styles.inputFrom}>
        <View style={styles.inputArea}>
          <InputForm label="タイトル" value={inputTitle} onChangeText={onChangeInputTitle} />
        </View>
        <View style={styles.inputArea}>
          <InputForm label="内容" value={inputContent} onChangeText={onChangeInputContent} />
        </View>
        <View style={styles.ButtonArea}>
          <ActionButton title="Todo更新" onPress={() => onUpdateTodo(inputTitle, inputContent)} />
        </View>
      </View>
    </View>
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
  inputArea: {
    marginBottom: 10,
  },
  ButtonArea: {
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
