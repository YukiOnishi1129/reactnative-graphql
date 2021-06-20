/**
 * ActiveTodo
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
/* types */
import { Query } from '@Type/schemas';
/* components */
import { CheckBoxForm } from '@Component/common/CheckBox';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * props
 */
type Props = {
  todo: Query['todo'];
  onActionTodo: (targetId: number, doneFlg: boolean) => Promise<void>;
  onMoveTodo: (targetId: number) => void;
  onDeleteTodo: (targetId: number) => void;
};

/**
 * ActiveTodo
 * @param {Props} props
 * @returns
 */
export const ActiveTodo: React.VFC<Props> = ({
  todo,
  onActionTodo,
  onMoveTodo,
  onDeleteTodo,
}: Props) => {
  return (
    <View key={todo.id} style={[styles.list]}>
      <CheckBoxForm targetId={todo.id} doneFlg={todo.doneFlg} onActionTodo={onActionTodo} />

      <Text style={styles.title}>{todo.title}</Text>
      <View style={styles.iconArea}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            onMoveTodo(todo.id);
          }}>
          <AntDesign name="edit" size={24} color={Theme.color.offWhite.full} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            onDeleteTodo(todo.id);
          }}>
          <AntDesign name="delete" size={24} color={Theme.color.offWhite.full} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    borderRadius: 10,
    backgroundColor: Theme.color.deepGreen.full,
  },
  check: {
    marginTop: 25,
  },
  title: {
    width: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    lineHeight: 80,
    color: Theme.color.offWhite.full,
  },
  iconArea: {
    display: 'flex',
    flexDirection: 'row',
    width: '20%',
  },
  icon: {
    marginTop: 25,
    marginRight: 20,
  },
});
