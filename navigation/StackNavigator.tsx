import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Stack , StackRoutes} from './routes';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import { TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface  Props extends  DrawerScreenProps<any, any> {};

export default function StackNavigator({ navigation }: Props) {
  
  console.log(navigation)
  const header = {
    configure: {
        headerLeft: () => (
            <TouchableOpacity onPress={ () => navigation.toggleDrawer() }>
                <Ionicons name="menu" size={27} color="white" style={{paddingLeft: 10}} />
            </TouchableOpacity>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => console.log("No jodas")}>
                <Ionicons name="settings-sharp" size={27} color="white" style={{paddingRight: 10}}/>
            </TouchableOpacity>
        )
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0041c4ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={StackRoutes.Home} component={HomeScreen} options={header.configure} />
      <Stack.Screen name={StackRoutes.NotFound} component={NotFoundScreen} />
    </Stack.Navigator>
  )
}

