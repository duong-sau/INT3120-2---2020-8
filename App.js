import GrammarController from '../Screens/Controller/GrammarController';
import VocabularyController from '../Screens/Controller/VocabularyController';
import Practice from '../Screens/Practice';
import Login from '../Screens/Login';
import About from '../Screens/About';
import LoginController from './Screens/Controller/LoginController';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Grammar from './Screens/Entity/Grammar';
class App extends Component {
  render() {
    // return <LoginController />;
    test('given empty grammarKey', () => {
      const {getByPlaceholder, getByText, getAllByText} = render(<Grammar />);

      fireEvent.changeText(getByPlaceholder('Enter Grammar key'), 'G1');
      fireEvent.press(getByText('Key'));

      const GElements = getAllByText('G1');
      expect(GElements).toHaveLength(1);
    });
    test('enter Answer', () => {
      const {getByPlaceholder, getAllByText} = render(<Result />);

      fireEvent.changeText(getByPlaceholder('Answer'), 'answer');
      fireEvent.press(getAllByText('Answer'));
      const Ans = useCallback(() => {
        setItems([Item, ...items]);
      }, [Item, items]);
       var answer=getAllByText('Answer');
        
      const GElements = getAllByText('Answer1');
      expect(GElements).toBeNumber(1);

    });
  }
}
export default App;
