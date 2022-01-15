import React, {Component} from 'react';
import 'react-native-gesture-handler';

import MainStackNavigator from './src/navigations/MainStackNavigator';

export default class App extends Component {
  render() {
    return <MainStackNavigator />;
  }
}
