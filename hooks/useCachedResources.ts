import { Ionicons}  from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

export default function useCachedResources () {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try{
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    ...Ionicons.font,
                    "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
                    "lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }
        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}