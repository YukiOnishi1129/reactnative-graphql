/**
 * LoginTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, login } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { InputForm } from '@Component/common/InputForm';
import { ActionButton } from '@Component/common/ActionButton';
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

  /**
   * ログイン
   * @returns
   */
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

      <View style={styles.inputFrom}>
        <View style={styles.inputArea}>
          <InputForm label="メールアドレス" value={userEmail} onChangeText={onChangeEmail} />
        </View>
        <View>
          <InputForm label="パスワード" value={userPassword} onChangeText={onChangePassword} />
        </View>
      </View>

      <View style={styles.ButtonArea}>
        <ActionButton title="ログイン" onPress={onLogin} />
      </View>

      {/* <TouchableOpacity style={styles.loginArea} onPress={onLogin}>
        <Text style={styles.loginButton}>ログイン</Text>
      </TouchableOpacity> */}
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
  inputFrom: {
    marginTop: 50,
    marginBottom: 50,
  },
  inputArea: {
    marginBottom: 20,
  },
  ButtonArea: {
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