/**
 * InputForm
 * @package components
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * props
 */
type Props = {
  targetId: number;
  doneFlg: boolean;
  onActionTodo: (targetId: number, doneFlg: boolean) => Promise<void>;
};

/**
 * CheckBoxForm
 * @param {Props} props
 */
export const CheckBoxForm: React.VFC<Props> = ({ targetId, doneFlg, onActionTodo }: Props) => {
  const [checkFlg, setCheckFlg] = React.useState(doneFlg);

  return (
    <View style={styles.check}>
      <CheckBox
        disabled={false}
        checked={checkFlg}
        checkedColor={Theme.color.offWhite.full}
        onPress={() => {
          setCheckFlg(!checkFlg);
          onActionTodo(targetId, doneFlg);
        }}
        textStyle={[
          styles.textStyle,
          {
            color: Theme.color.offWhite.full,
          },
        ]}
      />
    </View>
  );
};

/**
 * style
 */
const styles = StyleSheet.create({
  check: {
    marginTop: 12,
    width: '1%',
  },
  textStyle: {
    fontSize: 14,
  },
});
