/**
 * MyPageTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, logout } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * MyPageTemplate
 * @returns
 */
export const MyPageTemplate: React.VFC = () => {
  /* contexts */
  const dispatch = useAppDispatch();
  /* storage */
  const repo = getUserStorage();

  /**
   * ログアウト
   */
  const onLogout = async () => {
    await repo.remove();
    dispatch(logout());
  };

  return (
    <BaseScreen>
      <Text style={styles.title}>MyPage</Text>
      <TouchableOpacity onPress={onLogout} style={styles.logoutArea}>
        <Text style={styles.logoutButton}>ログアウト</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  logoutButton: {
    width: '50%',
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: Theme.color.deepGreen.full,
    color: Theme.color.offWhite.full,
    fontWeight: 'bold',
  },
});
