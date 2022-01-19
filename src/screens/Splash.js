import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

import notepadLoading from '../lottie/notepadLoading.json';
import {COLORS} from '../components/shared/colors';

export default function Splash(props) {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={notepadLoading}
        autoPlay
        loop={false}
        duration={3500}
        onAnimationFinish={() => {
          props.navigation.replace('TodoList');
        }}
      />
      <Text
        style={{
          marginTop: 120,
          fontSize: 18,
          fontWeight: 'bold',
          color: COLORS.white,
        }}>
        ToT
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
