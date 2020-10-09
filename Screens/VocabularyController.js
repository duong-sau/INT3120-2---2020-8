import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Side, Sig} from './Login';
import GrammarEntity from './GrammarEntity';
import Practice from './Practice';
import Result from './Result';
import Vocabulary from './Vocabulary';
import VocabularyEntity from './VocabularyEntity';

const Stack = createStackNavigator();
export default class Grammar extends Component {
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
            title: 'Từ Vựng',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="VoCabularycontroller"
          component={Vocabulary}
        />
        <Stack.Screen
          options={{
            title: 'Từ Vựng',
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: '#01B1BC'},
          }}
          name="Vocabulary"
          component={VocabularyEntity}
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
