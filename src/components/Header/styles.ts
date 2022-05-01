import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 258,
    paddingTop: getStatusBarHeight(),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.primaryColorBlack,
  },
  image: {
    height: 133.7,
    width: 143.64,
  },
});
