import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect, useCallback } from 'react';
import 'react-native-reanimated';
import { Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import styles from '@/src/screens/HomeScreen/HomeScreen.styles';

SplashScreen.preventAutoHideAsync();

const LoadingScreen: React.FC = () => {
    const colorScheme = useColorScheme();
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);

                await new Promise(resolve => setTimeout(resolve, 5000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onLayout={onLayoutRootView}>
                <Text>Farm Compass</Text>
                <Image
                    source={require('@/src/assets/images/loading.gif')}
                    style={styles.loadingImage}
                />
                <Text>Loading...</Text>
            </View>
        </ThemeProvider>
    );
};

export default LoadingScreen;