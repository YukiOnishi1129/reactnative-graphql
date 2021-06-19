/**
 * CommonLogics
 * @package logics
 */
import { Alert } from 'react-native';

/**
 * アラート表示
 * @param title
 * @param content
 */
export const showAlertDialog = (title: string, content: string): void => {
  Alert.alert(
    title,
    content,
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
};

/**
 * コンファーム表示
 * @param title
 * @param content
 * @param func
 */
export const showConfirmDialog = (title: string, content: string, func: () => void): void => {
  Alert.alert(
    title,
    content,
    [
      {
        text: 'キャンセル',
        style: 'cancel',
      },
      {
        text: 'OK',
        style: 'default',
        onPress: func,
      },
    ],
    { cancelable: false },
  );
};
