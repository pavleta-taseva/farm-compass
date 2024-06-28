import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    return (
        <>
            <View>
                <Text>Home screen loaded</Text>
            </View>
            <View style={styles.container}>
                <Image
                    source={require('@/src/assets/images/loading.gif')}
                    style={styles.loadingImage}
                />
            </View>
        </>
    );
}

export default HomeScreen;