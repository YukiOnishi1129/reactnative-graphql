/**
 * BottomTab
 * UnAuthenticateTabNavigator
 * @package routes
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
/* screens */
import { LoginScreen } from '@Screen/LoginScreen';
import { RegisterScreen } from '@Screen/RegisterScreen';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';
/* styles */
import { Theme } from '@Style/Theme';

const BottomTab = createBottomTabNavigator();

/**
 * UnAuthenticateTabNavigator
 * @returns
 */
export const UnAuthenticateTabNavigator: React.VFC = () => {
  const Icon = (iconName: 'login' | 'app-registration', color: string) => (
    <MaterialIcons name={iconName} color={color} size={24} />
  );

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.color.offWhite.full,
        inactiveTintColor: Theme.color.offWhite.sixty,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: Theme.color.deepGreen.full,
        },
      }}>
      {/* ログイン画面 */}
      <BottomTab.Screen
        name={NAVIGATION_NAME.SIGN_IN}
        component={LoginScreen}
        options={{
          tabBarLabel: 'SignIn',
          tabBarIcon: (color) => Icon('login', color.color),
        }}
      />
      {/* 会員登録画面 */}
      <BottomTab.Screen
        name={NAVIGATION_NAME.SIGN_UP}
        component={RegisterScreen}
        options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: (color) => Icon('app-registration', color.color),
        }}
      />
    </BottomTab.Navigator>
  );
};
