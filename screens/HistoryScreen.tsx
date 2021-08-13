import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props extends  DrawerScreenProps<any, any> {};

export default function HistoryScreen({ route }: Props) {
  let data = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentWrapper}>
        <Text>ajshdhjakshdk</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    padding: 20,
  },
});
