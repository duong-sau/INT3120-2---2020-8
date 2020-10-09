import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

let da = [
  {
    type: 1,
    content:
      '1. Subject (chủ ngữ):\n' +
      '\n' +
      'Chủ ngữ là chủ thể của hành động trong câu, thường đứng trước động từ (verb). Chủ ngữ thường là một danh từ (noun) hoặc một ngữ danh từ (noun phrase – một nhóm từ kết thúc bằng một danh từ, trong trường hợp này ngữ danh từ không được bắt đầu bằng một giới từ). Chủ ngữ thường đứng ở đầu câu và quyết định việc chia động từ.\n' +
      '\n' +
      'Chú ý rằng mọi câu trong tiếng Anh đều có chủ ngữ (Trong câu mệnh lệnh, chủ ngữ được ngầm hiểu là người nghe. Ví dụ: “Don’t move!” = Đứng im!).',
  },
  {
    type: 2,
    content:
      'Milk is delicious. (một danh từ)\n' +
      '\n' +
      'That new, red car is mine. (một ngữ danh từ)',
  },
  {
    type: 3,
    content:
      'Đôi khi câu không có chủ ngữ thật sự, trong trường hợp đó, It hoặc There đóng vai trò chủ ngữ giả.',
  },
  {
    type: 4,
    content:
      'It is a nice day today.\n' +
      '\n' +
      'There is a fire in that building.\n' +
      '\n' +
      'There were many students in the room.\n' +
      '\n' +
      'It is the fact that the earth goes around the sun.',
  },
];
export default class GrammarEntity extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.style}>
        <ScrollView>
          <Text style={styles.cot}>{da[0].content}</Text>
          <Text style={styles.exm}>{da[1].content}</Text>
          <Text style={styles.cot}>{da[2].content}</Text>
          <Text style={styles.exm}>{da[3].content}</Text>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.nul} />
          <TouchableOpacity
            style={{width: '100%', height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Practice');
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\next.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
/*
export class GrammarContent extends Component {
  render() {
    switch (this.props.type) {
      case 2:
        return <Text Style={{color: 'red'}}>123456</Text>;
      case 1:
        return <Text Style={styles.cot}>0000100</Text>;
      case 3:
        return <Text Style={styles.exm}>{this.props.content}</Text>;
      case 4:
        return <Text Style={styles.img}>{this.props.content}</Text>;
    }
  }
}

 */

const styles = StyleSheet.create({
  style: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#01B1BC',
    height: 50,
    justifyContent: 'space-between',
  },
  gra: {
    borderColor: 'green',
    borderWidth: 2,
    fontSize: 24,
    color: '#FFFFFF',
  },
  cot: {
    color: 'black',
    fontSize: 18,
  },
  exm: {
    borderColor: '#a5a5a5',
    borderWidth: 1,
    fontSize: 15,
    color: '#501500',
  },
  img: {
    fontSize: 80,
    color: 'blue',
  },
  nul: {
    width: '88%',
  },
});
