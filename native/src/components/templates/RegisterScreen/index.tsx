/**
 * RegisterTemplate
 * @package components
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
import { BaseScreen } from '@Component/layouts/BaseScreen';
/* hooks */
import { useSignInMutation } from '@Hook/useGraphQL';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * RegisterTemplate
 * @returns
 */
export const RegisterTemplate: React.VFC = () => {
  /* graphql query */
  /* graphql mutation */

  return (
    <BaseScreen>
      <Text>RegisterTemplate</Text>
    </BaseScreen>
  );
};
