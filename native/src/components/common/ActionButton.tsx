/**
 * InputForm
 * @package components
 */
import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * props
 */
type Props = React.ComponentPropsWithRef<typeof Button>;

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  return (
    <Button
      {...props}
      containerStyle={[styles.container]}
      buttonStyle={[styles.button]}
      titleStyle={[styles.title]}
    />
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  container: {
    height: 80,
  },
  button: {
    borderRadius: 50,
    width: 300,
    height: 58,
    backgroundColor: Theme.color.deepGreen.full,
  },
  title: {
    color: Theme.color.offWhite.full,
    fontWeight: 'bold',
  },
});
