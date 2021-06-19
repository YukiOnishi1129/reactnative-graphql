/**
 * BaseScreen
 * @package components
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
/* styles */
import { Theme } from '@Style/Theme';

/**
 * props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * BaseScreen
 * @param { Props } children
 * @returns
 */
export const BaseScreen: React.VFC<Props> = ({ children }: Props) => (
  <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
);

/**
 * styles
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.color.offWhite.full,
    height: '100%',
  },
});
