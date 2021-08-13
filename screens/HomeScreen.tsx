import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FloatingActionButton from '../components/FAB/FAB';
import Information from '../components/Information/information';
import PopUp, { TValues } from '../components/modal/Modal';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Item from '../components/Item/Item';

interface  Props extends  DrawerScreenProps<any, any> {};


export default function HomeScreen({ navigation }: Props) {
  
  console.log(navigation)
  const [open, setOpen] = React.useState(false)
  const [openB, setOpenB] = React.useState(true)
  const [transferList, setTransferList] = React.useState<TValues[]>([])
  let asd = 'asdjlasjkd';
  return (
    <View style={styles.container}>
      <Information/>
      <PopUp
        visible={open}
        onPress={ () => setOpen(!open)}
        transferList={transferList}
        setTransferList={setTransferList}
      />
      <FlatList
        data={transferList}
        keyExtractor={(item, index) => `${item.note}-${index}`}
        renderItem={({item}) => (
          <Item 
            note={item.note}
            value={item.value}
          />
        )}
      />
      <FloatingActionButton
        visible={openB}
        onPress={ () => {setOpen(!open); {/*navigation.jumpTo('History', {asd})*/}}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  contentWrapper: {
    padding: 20,
  },
});
