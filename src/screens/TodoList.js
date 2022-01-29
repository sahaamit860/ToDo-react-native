import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedOutRight,
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cloneDeep} from 'lodash';

import AddFloatingButton from '../components/common/AddFloatingButton';
import {COLORS} from '../components/shared/colors';
import Typography from '../components/shared/Typography';

const moment = require('moment');

export default function TodoList(props) {
  const [taskList, setTaskList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setRefreshing(true);
    AsyncStorage.getItem('taskList').then(value => {
      setRefreshing(false);
      let tempTaskList = JSON.parse(value);
      setTaskList(tempTaskList.reverse());
    });
  };

  const removeList = index => {
    let tempTaskList = cloneDeep(taskList);
    tempTaskList.splice(index, 1);
    setTaskList(tempTaskList);
    setTimeout(() => {
      AsyncStorage.setItem('taskList', JSON.stringify(tempTaskList.reverse()));
    }, 200);
  };

  const renderListItem = (item, index) => {
    return (
      <Animated.View
        style={[styles.listCard]}
        entering={LightSpeedInLeft.duration(500)
          .delay(index * 100)
          .springify()}
        exiting={LightSpeedOutRight.duration(500).springify()}
        layout={Layout.springify()}>
        <View>
          <Text style={[Typography.Button_Lead]}>{item.taskName}</Text>
          <Text style={[Typography.Note2, {color: COLORS.grey_400}]}>
            created on{' '}
            {moment.unix(item.createTime / 1000).format('Do MMM YYYY')}
          </Text>
        </View>

        <TouchableOpacity onPress={() => removeList(index)} style={styles.bin}>
          <Ionicons name="trash-outline" size={18} color={COLORS.orange} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View style={{marginTop: 20}} layout={Layout.springify()}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getList} />
          }
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => renderListItem(item, index)}
        />
      </Animated.View>

      {/************** Add Component starts ************/}

      <AddFloatingButton getList={getList} />

      {/************** Add Component ends ************/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bin: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
