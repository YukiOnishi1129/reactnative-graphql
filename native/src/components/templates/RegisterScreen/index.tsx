/**
 * RegisterTemplate
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
/* storages */
import { getUserStorage } from '@Storage/Storage';
/* contexts */
import { useAppDispatch, login } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
import { InputForm } from '@Component/common/InputForm';
import { ActionButton } from '@Component/common/ActionButton';
/* hooks */
import { useSignUpMutation } from '@Hook/useGraphQL';
/* logics */
import { showAlertDialog } from '@Logic/CommonLogics';

/**
 * RegisterTemplate
 * @returns
 */
export const RegisterTemplate: React.VFC = () => {
  /* contexts */
  const dispatch = useAppDispatch();
  /* graphql mutation */
  const [registerMutation, { loading: mutationLoading, error: mutationError }] =
    useSignUpMutation();
  /* storage */
  const repo = getUserStorage();
  const entity = repo.getEntity();
  /* local */
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userConfirmPassword, setUserConfirmPassword] = React.useState('');

  /**
   * userName変更処理
   * @param text
   */
  const onChangeName = (text: string) => {
    setUserName(text);
  };

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
   * userPassword変更処理
   * @param text
   */
  const onChangeConfirmPassword = (text: string) => {
    setUserConfirmPassword(text);
  };

  /**
   * 会員登録
   * @returns
   */
  const onRegister = async () => {
    if (userName === '' || userEmail === '' || userPassword === '' || userConfirmPassword === '') {
      showAlertDialog('未入力', '入力値がありません。');
      return;
    }

    if (userPassword !== userConfirmPassword) {
      showAlertDialog('パスワードエラー', '入力値がパスワード(確認)と異なります。');
      return;
    }

    try {
      const result = await registerMutation({
        variables: {
          registerInput: {
            name: userName,
            email: userEmail,
            password: userPassword,
          },
        },
      });

      if (!result.data) {
        showAlertDialog('会員登録失敗', '会員登録できません');
        return;
      }

      entity.isLogin = true;
      entity.userId = result.data?.register?.user.id;
      entity.token = result.data?.register?.token;

      // AsyncStorageに保存
      await repo.save();

      // globalStateに保存
      dispatch(login(entity.userId, entity.token));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BaseScreen>
      {mutationLoading && <Text>Loading...</Text>}
      {mutationError && <Text>{mutationError.message}</Text>}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>SignUp</Text>
        <View style={styles.inputFrom}>
          <View style={styles.inputArea}>
            <InputForm label="お名前" value={userName} onChangeText={onChangeName} />
          </View>
          <View style={styles.inputArea}>
            <InputForm label="メールアドレス" value={userEmail} onChangeText={onChangeEmail} />
          </View>
          <View style={styles.inputArea}>
            <InputForm label="パスワード" value={userPassword} onChangeText={onChangePassword} />
          </View>
          <View>
            <InputForm
              label="パスワード(確認)"
              value={userConfirmPassword}
              onChangeText={onChangeConfirmPassword}
            />
          </View>
        </View>

        <View style={styles.ButtonArea}>
          <ActionButton title="会員登録" onPress={onRegister} />
        </View>
      </ScrollView>
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
    marginBottom: 30,
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
});
