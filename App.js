/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
   
<React.View style = { styles.parent } >
 
    <React.Text>
        Type something in English:
    </React.Text>
 
    <React.TextInput text = { this.state.input } />
 
    <React.Text style = { styles.germanLabel } >
        Its German equivalent is:
    </React.Text>
 
    <React.Text style = { styles.germanWord } >
        { this.state.output }
    </React.Text>
   showMeaning: function() {
    // Use the ternary operator to check if the word 
    // exists in the dictionary.
    var meaning = this.state.input in english_german ? 
                    english_german[this.state.input] : 
                    "Not Found";
 
    // Update the state
    this.setState({
         output: meaning 
    });
},
</React.View>
var styles = React.StyleSheet.create({
 
    // For the container View
    parent: {
        padding: 16
    },
 
    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
