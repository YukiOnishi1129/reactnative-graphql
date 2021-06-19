/**
 * ログイン後のBottomTabsのStackNavigator
 * MainTabStackNavigator
 * @package routes
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* routes */
import { MainTabStackNavigator } from '@Route/BottomTabs/MainTabNavigator';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';

const Stack = createStackNavigator();

/**
 * IsLoginStackNavigator
 * @returns
 */
export const IsLoginStackNavigator: React.VFC = () => {
  return (
    <Stack.Navigator>
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
