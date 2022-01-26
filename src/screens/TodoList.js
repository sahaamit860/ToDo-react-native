import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AddFloatingButton from '../components/common/AddFloatingButton';

export default function TodoList(props) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    AsyncStorage.getItem('taskList').then(value => {
      let tempTaskList = JSON.parse(value);
      setTaskList(tempTaskList);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: 15}}>All Tasks</Text>

      <FlatList
        keyExtractor={item => item.id}
        data={taskList}
        renderItem={item => <Text>{item.item.taskName}</Text>}
      />

      {/************** Add Component starts ************/}

      <AddFloatingButton getList={getList} />

      {/************** Add Component ends ************/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
