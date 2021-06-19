/**
 * TodoListScreen
 * @package screens
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
/* contexts */
import { useAppDispatch, login } from '@Context/AppContext';
/* components */
import { BaseScreen } from '@Component/layouts/BaseScreen';
/* hooks */
import { useSignInMutation } from '@Hook/useGraphQL';
/* styles */
import { Theme } from '@Style/Theme';
