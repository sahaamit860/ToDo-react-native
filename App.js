import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainStackNavigator from './src/navigations/MainStackNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Icon.loadFont();
    Ionicons.loadFont();
  }

  render() {
    return <MainStackNavigator />;
  }
}
