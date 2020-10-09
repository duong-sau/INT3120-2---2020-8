import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SideMenu from './SideMenu';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Categorys from '../Compoment/Categorys';
import GrammarController from '../Screens/GrammarController';

export default class Screen extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'green',
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#01B8BC',
  },
  footer: {
    flex: 9,
    backgroundColor: '#FFFFFF',
  },
});
