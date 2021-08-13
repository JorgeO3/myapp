import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentWrapper}>
        <Text>Hola mundo</Text>
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
