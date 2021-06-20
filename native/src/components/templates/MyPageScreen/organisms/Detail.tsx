/**
 * Detail
 * @package components
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
/* components */
import { InputForm } from '@Component/common/InputForm';
/* types */
import { Query } from '@Type/schemas';

/**
 * props
 */
type Props = {
  user: Query['me'];
};

/**
 * Detail
 * @param props
 * @returns
 */
export const Detail: React.VFC<Props> = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <InputForm label="お名前" disabled={true} value={user.name} />
      </View>
      <View>
        <InputForm label="メールアドレス" disabled={true} value={user.email} />
      </View>
    </View>
  );
};

/**
 * styles
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 40,
  },
  label: {
    marginBottom: 20,
  },
});
