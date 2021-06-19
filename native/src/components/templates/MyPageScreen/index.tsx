/**
 * MyPageTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, logout } from '@Context/AppContext';
/* graphql */
import {} from '@Hook/useGraphQL';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';

/**
 * MyPageTemplate
 * @returns
 */
export const MyPageTemplate: React.VFC = () => {
  /* graphql query */
  /* graphql mutation */
  /* contexts */
  const dispatch = useAppDispatch();
  /* storage */
  const repo = getUserStorage();
  const entity = repo.getEntity();

  /**
   * ログアウト
   */
  const onLogout = async () => {
    await repo.remove();
    dispatch(logout());
  };

  return (
    <BaseScreen>
      <Text>MyPage</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>ログアウト</Text>
      </TouchableOpacity>
    </BaseScreen>
  );
};
