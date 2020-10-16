/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import SideMenu from './Template/SideMenu';
import GrammarEntity from './Screens/Entity/GrammarEntity';
import Vocabulary from './Screens/Entity/Vocabulary';
import Practice from './Screens/Practice';
import Result from './Screens/Result';
class App extends Component {
  render() {
    return <SideMenu />;
  }
}
export default App;
