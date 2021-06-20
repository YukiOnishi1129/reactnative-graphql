/**
 * ログイン後のBottomTabsのStackNavigator
 * MainTabStackNavigator
 * @package routes
 */
import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
/* screens */
import { TodoListScreen } from '@Screen/TodoListScreen';
import { TodoDetailScreen } from '@Screen/TodoDetailScreen';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';
/* styles */
import { Theme } from '@Style/Theme';

const Stack = createStackNavigator();

// 共通のヘッダーオプション
const headerNavigatorOptions: StackNavigationOptions = {
  headerTitleAlign: 'left',
  headerStyle: { height: 100 },
};

// 共通のヘッダースクリーンオプション
const headerScreenOptions = {
  headerTitleStyle: {
    color: Theme.color.deepGreen.full,
    fontSize: 20,
  },
};

/**
 * HomeStack
 * @returns
 */
export const HomeStack: React.VFC = () => {
  return (
    <Stack.Navigator mode="card" screenOptions={headerNavigatorOptions}>
      {/* TodoList画面 */}
      <Stack.Screen
        name={NAVIGATION_NAME.TODO_LIST}
        component={TodoListScreen}
        options={{
          ...headerScreenOptions,
          headerTitle: 'TodoList',
          headerShown: false,
        }}
      />
      {/* MyPage画面 */}
      <Stack.Screen
        name={NAVIGATION_NAME.TODO_DETAIL}
        component={TodoDetailScreen}
        options={{
          ...headerScreenOptions,
          headerTitle: 'Todo',
        }}
      />
    </Stack.Navigator>
  );
};
