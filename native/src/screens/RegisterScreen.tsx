/**
 * RegisterScreen
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
import { RegisterTemplate } from '@Component/templates/RegisterScreen';
/* hooks */
import { useSignInMutation } from '@Hook/useGraphQL';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * RegisterScreen
 * @returns
 */
export const RegisterScreen: React.VFC = () => {
  return <RegisterTemplate />;
};
