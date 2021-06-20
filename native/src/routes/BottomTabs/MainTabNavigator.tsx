/**
 * BottomTab
 * MainTabStackNavigator
 * @package routes
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
/* routes */
import { HomeStack } from '@Route/Stacks/MainTabStackNavigator';
/* screens */
import { MyPageScreen } from '@Screen/MyPageScreen';
/* constants */
import { NAVIGATION_NAME } from '@Constant/navigation';
/* styles */
import { Theme } from '@Style/Theme';

const BottomTab = createBottomTabNavigator();

/**
 * MainTabStackNavigator
 * @returns
 */
export const MainTabStackNavigator: React.VFC = () => {
  const Icon = (iconName: 'work' | 'person', color: string) => (
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
      {/* TodoList画面 */}
      <BottomTab.Screen
        name={NAVIGATION_NAME.TODO}
        component={HomeStack}
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: (color) => Icon('work', color.color),
        }}
      />
      {/* MyPage画面 */}
      <BottomTab.Screen
        name={NAVIGATION_NAME.MY_PAGE}
        component={MyPageScreen}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: (color) => Icon('person', color.color),
        }}
      />
    </BottomTab.Navigator>
  );
};
