import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Grammar extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <FlatList
        data={[
          {
            content: 'Cấu trúc chung của 1 câu',
          },
          {
            content: 'Câu Bị Động',
          },
          {
            content: 'Câu cầu khiến',
          },
          {
            content: 'Đại từ nhân xưng',
          },
          {
            content: 'Tân ngữ',
          },
          {
            content: 'Các thì hiện Tại',
          },
          {
            content: 'Các thì quá khứ',
          },
          {
            content: 'Các thì tương lai',
          },
          {
            content: 'Câu điều kiện',
          },
        ]}
        numColumns={1}
        renderItem={({item}) => (
          <View style={styles.style}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('GrammarEntity');
              }}>
              <Text style={styles.content}>{item.content}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    marginTop: 20,
    fontSize: 18,
    marginLeft: '10%',
    marginBottom: 20,
  },
});
