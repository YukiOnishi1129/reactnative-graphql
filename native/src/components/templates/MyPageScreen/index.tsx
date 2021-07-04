/**
 * MyPageTemplate
 * @package components
 */
import React from 'react';
import { useApolloClient } from '@apollo/client';
import { StyleSheet, View, Text } from 'react-native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, logout } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { Detail } from './organisms/Detail';
import { ActionButton } from '@Component/common/ActionButton';
/* hooks */
import { useGetMyUserQuery } from '@Hook/useGraphQL';

/**
 * MyPageTemplate
 * @returns
 */
export const MyPageTemplate: React.VFC = () => {
  /* cache */
  const client = useApolloClient();
  /* contexts */
  const dispatch = useAppDispatch();
  /* storage */
  const repo = getUserStorage();
  /* graphql query */
  const getMyUserQuery = useGetMyUserQuery();

  /**
   * ログアウト
   */
  const onLogout = async () => {
    await repo.remove();
    dispatch(logout());
    // client.clearStore();
  };

  return (
    <BaseScreen>
      {getMyUserQuery?.loading && <Text>Loading...</Text>}
      {getMyUserQuery?.error && <Text>エラー</Text>}
      <Text style={styles.title}>MyPage</Text>
      {getMyUserQuery?.data?.me && <Detail user={getMyUserQuery.data.me} />}
      <View style={styles.logoutArea}>
        <ActionButton title="ログアウト" onPress={onLogout} />
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
  logoutArea: {
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
