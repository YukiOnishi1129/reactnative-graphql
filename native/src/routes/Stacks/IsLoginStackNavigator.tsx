/**
 * ログイン後のBottomTabsのStackNavigator
 * MainTabStackNavigator
 * @package routes
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* contexts */
import { useAppState, useAppDispatch, login } from '@Context/AppContext';
/* routes */
import { UnAuthenticateTabNavigator } from '@Route/BottomTabs/UnAuthenticateTabNavigator';
import { MainTabStackNavigator } from '@Route/BottomTabs/MainTabNavigator';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';
import { getUserStorage } from '@Storage/Storage';

const Stack = createStackNavigator();

/**
 * IsLoginStackNavigator
 * @returns
 */
export const IsLoginStackNavigator: React.VFC = () => {
  /* contexts */
  const { isLogin } = useAppState();
  const dispatch = useAppDispatch();

  /* storage */
  const repo = getUserStorage();
  const entity = repo.getEntity();

  /**
   * 認証処理
   */
  const auth = React.useCallback(async () => {
    const current = await repo.load();

    if (current?.isLogin && current?.userId && current?.token) {
      entity.isLogin = true;
      entity.userId = current.userId;
      entity.token = current.token;

      dispatch(login(entity.userId, entity.token));
    }
  }, [repo, entity, dispatch]);

  React.useEffect(() => {
    auth();
  }, [auth]);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Screen
          name={NAVIGATION_NAME.MAIN}
          component={MainTabStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={NAVIGATION_NAME.AUTH}
          component={UnAuthenticateTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name={NAVIGATION_NAME.MAIN}
        component={MainTabStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
