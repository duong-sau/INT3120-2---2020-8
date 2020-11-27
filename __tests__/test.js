import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import GrammarController from '../Screens/Controller/GrammarController';
import VocabularyController from '../Screens/Controller/VocabularyController';
import Practice from '../Screens/Practice';
import Login from '../Screens/Login';
import About from '../Screens/About';
test('.toBeEmpty', () => {
  const { queryByTestId } = render(
    <View testID="not-empty">
      <View testID="empty" />
    </View>,
  );

  const empty = queryByTestId('empty');
  const notEmpty = queryByTestId('not-empty');
  const nonExistantElement = queryByTestId('not-exists');
  const fakeElement = { thisIsNot: 'an html element' };

  expect(() => expect(empty).not.toBeEmpty()).toThrowError();
  expect(() => expect(notEmpty).toBeEmpty()).toThrowError();
  expect(() => {
    expect(nonExistantElement).toBeEmpty();
  }).toThrowError();

test('load app ', () => {
  const rendered = renderer.create(<App />);
  const TeamsListRendered = rendered.root.findByType(TeamsList);
  const ActivityIndicatorRendered = TeamsListRendered.findByType(ActivityIndicator);
  expect(ActivityIndicatorRendered).toBeTruthy();
});