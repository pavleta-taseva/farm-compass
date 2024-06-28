import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/videos/loading-screen.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default LoadingScreen;
