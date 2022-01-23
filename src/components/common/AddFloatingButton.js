import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {COLORS} from '../shared/colors';
import CreateNewTask from './CreateNewTask';

export default function AddFloatingButton() {
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
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        style={{justifyContent: 'flex-end', margin: 0}}>
        <CreateNewTask />
      </Modal>
    );
  };

  return (
    <>
      {createModal()}

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.addBtn}
        onPress={handleCreateTaskModal}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.white}}>
          +
        </Text>
      </TouchableOpacity>
    </>
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
