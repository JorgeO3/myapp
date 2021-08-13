import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const sBarHeight = Constants.statusBarHeight;
