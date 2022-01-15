import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function TodoList(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text onPress={() => props.navigation.navigate('Splash')}>TodoList</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
