import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useEffect, useCallback, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { Text, View, Image } from 'react-native';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import styles from '@/src/screens/HomeScreen/HomeScreen.styles';

const RootLayout: React.FC = () => {
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

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {!appIsReady ?
        <>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onLayout={onLayoutRootView}>
            <Text>Farm Compass</Text>
            <Image
              source={require('@/src/assets/images/loading.gif')}
              style={styles.loadingImage}
            />
            <Text>Loading...</Text>
          </View></>
        : <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      }
    </ThemeProvider>
  );
};

export default RootLayout;