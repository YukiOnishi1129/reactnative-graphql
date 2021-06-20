/**
 * InputForm
 * @package components
 */
import React from 'react';
import { Input } from 'react-native-elements';

/**
 * props
 */
type Props = React.ComponentPropsWithRef<typeof Input>;

/**
 * InputForm
 * @param {Props} props
 * @returns
 */
export const InputForm: React.VFC<Props> = (props: Props) => {
  const { label, value, disabled = false, onChangeText } = props;

  return <Input label={label} disabled={disabled} value={value} onChangeText={onChangeText} />;
};
