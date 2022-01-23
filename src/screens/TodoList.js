import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  SlideInLeft,
  SlideInRight,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../components/shared/colors';

export default function TodoList(props) {
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const handleCreateTaskModal = () => {
    setCreateTaskModalOpen(!createTaskModalOpen);
  };

  const createModal = () => {
    return (
      <Modal
        isVisible={createTaskModalOpen}
        animationIn="slideInUp"
        avoidKeyboard
        backdropColor={COLORS.black}
        onSwipeComplete={() => setCreateTaskModalOpen(false)}
        swipeDirection="down"
        useNativeDriverForBackdrop
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <View
          style={{
            width: 30,
            height: 6,
            backgroundColor: COLORS.white,
            alignSelf: 'center',
            marginBottom: 10,
            borderRadius: 20,
          }}></View>
        <View
          style={{
            height: '70%',
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {createModal()}

      <Text style={{alignSelf: 'center', marginTop: 15}}>All Tasks</Text>

      {/************** Add Component starts ************/}

      <View style={styles.addBtn}>
        <TouchableOpacity onPress={handleCreateTaskModal}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.white}}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/************** Add Component ends ************/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.yellow,
    shadowColor: COLORS.yellow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
