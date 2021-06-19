/**
 * Navigation
 * @package routes
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* routes */
import { IsLoginStackNavigator } from '@Route/Stacks/IsLoginStackNavigator';

/**
 * AppNavigator
 * @returns
 */
export const AppNavigator: React.VFC = () => {
  return (
    <NavigationContainer>
      <IsLoginStackNavigator />
    </NavigationContainer>
  );
};
