/**
 * LoginTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, login } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
/* hooks */
import { useSignInMutation } from '@Hook/useGraphQL';
/* logics */
import { showAlertDialog } from '@Logic/CommonLogics';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * LoginTemplate
 * @returns
 */
export const LoginTemplate: React.VFC = () => {
  /* contexts */
  const dispatch = useAppDispatch();
  /* graphql mutation */
  const [loginMutation, { loading: mutationLoading, error: mutationError }] = useSignInMutation();
  /* local */
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  /* storage */
  const repo = getUserStorage();
  const entity = repo.getEntity();

  /**
   * useEmail変更処理
   * @param text
   */
  const onChangeEmail = (text: string) => {
    setUserEmail(text);
  };

  /**
   * userPassword変更処理
   * @param text
   */
  const onChangePassword = (text: string) => {
    setUserPassword(text);
  };

  const onLogin = async () => {
    if (userEmail === '' || userPassword === '') {
      showAlertDialog('未入力', '入力値がありません。');
      return;
    }

    try {
      const result = await loginMutation({
        variables: {
          loginInput: {
            email: userEmail,
            password: userPassword,
          },
        },
      });

      if (!result.data) {
        showAlertDialog('ログイン失敗', 'ログインできません');
        return;
      }

      entity.isLogin = true;
      entity.userId = result.data?.login?.user.id;
      entity.token = result.data?.login?.token;

      await repo.save();

      dispatch(login(entity.userId, entity.token));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BaseScreen>
      {mutationLoading && <Text>Loading...</Text>}
      {mutationError && <Text>{mutationError.message}</Text>}
      <Text style={styles.title}>SignIn</Text>
      <View>
        <Text>メールアドレス</Text>
        <Input value={userEmail} onChangeText={onChangeEmail} />
      </View>
      <View>
        <Text>パスワード</Text>
        <Input value={userPassword} onChangeText={onChangePassword} />
      </View>
      <TouchableOpacity style={styles.loginArea} onPress={onLogin}>
        <Text style={styles.loginButton}>ログイン</Text>
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
  loginArea: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  loginButton: {
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
