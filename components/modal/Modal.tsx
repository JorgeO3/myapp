import React, { PropsWithChildren } from 'react';
import { Modal, StyleSheet, Text, View, Dimensions, TextInput, Alert, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window')

export interface TValues {
  note: string;
  value: string;
}


type Props = PropsWithChildren<{
  visible: boolean;
  onPress: () => void;
  setTransferList: React.Dispatch<React.SetStateAction<TValues[]>>;
  transferList: TValues[];
}>




export default function PopUp({ visible, onPress, setTransferList, transferList, }: Props) {
  const [note, setNote] = React.useState('')
  const [value, setValue] = React.useState('')

  const addTranfer = () => {
    if (!note) {
      Alert.alert('No Note', 'You need to enter an note');
    } else {
      setTransferList([...transferList, { note, value: value || '1' }]);
      setNote('')
      setValue('')
    }
  };
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalSubContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Consignacion</Text>
            </View>
            <View style={styles.noteContainer}>
              <Text style={styles.inputTitle}>Note</Text>
              <TextInput
                placeholder='Enter the note'
                style={styles.input}
                value={note}
                onChangeText={text => setNote(text)}
                placeholderTextColor={'#c1c7d1ff'}
              />
              <Text style={styles.inputTitle}>Value</Text>
              <TextInput
                placeholder='Enter the value'
                style={styles.input}
                value={value}
                onChangeText={number => setValue(number)}
                placeholderTextColor={'#c1c7d1ff'}
              />
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() => { addTranfer(); onPress() }}
                  style={styles.saveContainer}
                >
                  <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('Save')}
                  style={styles.cancelContainer}
                >
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    height: '35%',
    backgroundColor: '#ffff',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalSubContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    paddingTop: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002251ff'
  },
  noteContainer: {
    alignItems: 'flex-start',
    width: '90%',
    flex: 0.6,
  },
  inputTitle: {
    color: '#c9ced7ff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 20,
    paddingVertical: 5,
  },
  input: {
    backgroundColor: '#f6f7f9ff',
    borderRadius: 20,
    width: '100%',
    height: '25%',
    paddingLeft: 20,
    elevation: 5,
  },
  valueContainer: {
    alignItems: 'flex-start',
    width: '90%',
    flex: 1,
    backgroundColor: 'blue',
  },
  buttons: {
    paddingTop: 45,
    height: '70%',
    width: '100%',
  },
  saveContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0041c4ff',
    borderRadius: 20,
    elevation: 5,
  },
  save: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cancelContainer: {
    width: '100%',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancel: {
    color: '#000000',
  }
});
