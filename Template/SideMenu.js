import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../Screens/Login';
import VocabularyController from '../Screens/VocabularyController';
import GrammarController from '../Screens/GrammarController';
import Toeic600 from '../Screens/Toeic600';
import About from '../Screens/About';
import Privacy from '../Screens/Privacy';
import Practice from '../Screens/Practice';
const Draw = createDrawerNavigator();

export default class SideMenu extends Component {
  state = {};

  constructor(props) {
    super(props);
  }
  static propTypes = {};

  componentDidMount() {}
  feedback() {
    return <View />;
  }
  render() {
    return (
      <NavigationContainer>
        <Draw.Navigator>
          <Draw.Screen name="Grammar" component={GrammarController} />
          <Draw.Screen name="Vocabulary" component={VocabularyController} />
          <Draw.Screen name="Practice" component={Practice} />
          <Draw.Screen name="600" component={Toeic600} />
          <Draw.Screen name="800" component={Toeic600} />
          <Draw.Screen name="Login" component={Login} />
          <Draw.Screen name="Feedback" component={View} />
          <Draw.Screen name="Privacy" component={Privacy} />
          <Draw.Screen name="About" component={About} />
        </Draw.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: '#01B1BC',
  },

  imageButtonStyle: {
    width: 70,
    height: 70,
  },
});
