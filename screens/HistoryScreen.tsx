import React from 'react';

import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { MainDrawerParamList, MainRoutes } from '../navigation/routes';
import Item from '../components/Item/Item';
import { useData } from '../hooks/useData';


interface Props extends  DrawerScreenProps<MainDrawerParamList, MainRoutes.History> {};

export default function HistoryScreen({ route }: Props) {
  let data = route.params;

  const { transferList } = useData();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentWrapper}>
        <FlatList
          data={transferList}
          keyExtractor={(item, index) => `${item.note}-${index}`}
          renderItem={({ item }) => <Item note={item.note} value={item.value} />}
        />
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
