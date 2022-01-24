import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../shared/colors';

export default function CreateNewTask() {
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({title: ''});

  const validateForm = () => {
    let formIsValid = true;

    if (title.trim() === '') {
      setErrors({...errors, title: 'Task name can not be empty'});
      formIsValid = false;
    }

    setTimeout(() => {
      setErrors({...errors, title: ''});
    }, 2000);

    return formIsValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('done');
    }
  };

  return (
    <>
      <View style={styles.swipeDownIcon}></View>
      <View style={styles.modalCard}>
        <View style={styles.rowViewSpaceBetween}>
          <View style={{width: '70%'}}>
            <Text
              style={[
                styles.taskName,
                {color: errors?.title !== '' ? COLORS.alert_red : COLORS.grey_500},
              ]}>
              {errors?.title !== '' ? errors.title : 'Task name'}
            </Text>
            <TextInput
              placeholder="write here ..."
              selectionColor={COLORS.grey_500}
              onChangeText={value => setTitle(value)}
              value={title}
              style={styles.inputBox}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.5}
            style={styles.doneBtn}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalCard: {
    height: '70%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 15,
  },
  swipeDownIcon: {
    width: 30,
    height: 6,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
  taskName: {
    marginTop: 40,
    marginBottom: -10,
    marginLeft: 3,
    fontSize: 11,
  },
  inputBox: {
    fontSize: 18,
    color: COLORS.black,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowViewSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doneBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: COLORS.orange,
    shadowColor: COLORS.yellow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  doneText: {
    color: COLORS.white,
  },
});
