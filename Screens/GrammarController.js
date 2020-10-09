import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import GrammarEntity from './GrammarEntity';
import Practice from './Practice';
import Result from './Result';
import Grammar from './Grammar';

const Stack = createStackNavigator();
export default class GrammarController extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'NGỮ PHÁP',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="Grammar"
          component={Grammar}
        />
        <Stack.Screen
          options={{
            title: 'NGỮ PHÁP',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="GrammarEntity"
          component={GrammarEntity}
        />
        <Stack.Screen
          options={{
            title: 'NGỮ PHÁP',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="Practice"
          component={Practice}
        />
        <Stack.Screen
          options={{
            title: 'NGỮ PHÁP',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="Result"
          component={Result}
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
});
