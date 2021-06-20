/**
 * LoginScreen
 * @package screens
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
import { LoginTemplate } from '@Component/templates/LoginScreen';
/* hooks */
import { useSignInMutation } from '@Hook/useGraphQL';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * LoginScreen
 * @returns
 */
export const LoginScreen: React.VFC = () => {
  return <LoginTemplate />;
};
