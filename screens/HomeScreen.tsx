import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import FloatingActionButton from "../components/FAB/FAB";
import Information from "../components/Information/information";
import PopUp, { TValues } from "../components/modal/Modal";
import { DrawerScreenProps } from "@react-navigation/drawer";
import Item from "../components/Item/Item";
import { MainDrawerParamList, MainRoutes } from "../navigation/routes";
import { useData } from '../hooks/useData';

interface Props extends DrawerScreenProps<MainDrawerParamList, MainRoutes.Root> {}

export default function HomeScreen({ navigation }: Props) {
  
  const [open, setOpen] = React.useState(false);
  
  const [openB, setOpenB] = React.useState(true);
  
  const { transferList, setTransferList } = useData();

  return (
    <View style={styles.container}>
      <Information />
      <PopUp
        visible={open}
        onPress={() => setOpen(!open)}
        transferList={transferList}
        setTransferList={setTransferList}
      />
      <FloatingActionButton
        visible={openB}
        onPress={() => {
          setOpen(!open);
          {
            /*navigation.jumpTo('History', {asd})*/
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  contentWrapper: {
    padding: 20,
  },
});
