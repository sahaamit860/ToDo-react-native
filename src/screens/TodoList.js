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

import {COLORS} from '../components/shared/colors';

export default function TodoList(props) {
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const offset = useSharedValue(0);
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (!createTaskModalOpen) {
      offset.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });

      rotation.value = withTiming(0, {duration: 1000});
    } else {
      offset.value = withTiming(-300, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });

      rotation.value = withTiming(-45, {duration: 1000});
    }
  }, [createTaskModalOpen]);

  /********** Animated Components style starts ********/

  const animatedAddStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value),
        },
      ],
    };
  });
  const animatedPlusToCrossStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  /********** Animated Components style ends ********/

  const handleCreateTaskModal = () => {
    setCreateTaskModalOpen(!createTaskModalOpen);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: 15}}>All Tasks</Text>

      {/************** Animated Add Component starts ************/}

      <Animated.View style={[styles.addBtn, animatedAddStyles]}>
        <TouchableOpacity onPress={() => handleCreateTaskModal()}>
          <Animated.Text
            style={[
              animatedPlusToCrossStyle,
              {fontSize: 24, fontWeight: 'bold', color: COLORS.white},
            ]}>
            +
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>

      {/************** Animated Add Component ends ************/}
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
