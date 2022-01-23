import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import AddFloatingButton from '../components/common/AddFloatingButton';

export default function TodoList(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: 15}}>All Tasks</Text>

      {/************** Add Component starts ************/}

      <AddFloatingButton />

      {/************** Add Component ends ************/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
