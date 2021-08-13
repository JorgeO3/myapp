import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

export enum MainRoutes {
    Root = "Root",
    History = "History",
};

export type MainDrawerParamList = {
    [MainRoutes.Root]: undefined;
    [MainRoutes.History]: undefined;
};

export enum StackRoutes {
    Home = "Home",
    NotFound = "Notaund",
}

export type StackNavigatorParamList = {
    [StackRoutes.Home]: undefined;
    [StackRoutes.NotFound]: undefined;
}


export const MainDrawer = createDrawerNavigator<MainDrawerParamList>();
export const Stack = createStackNavigator<StackNavigatorParamList>();