import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
const tru = 'Số câu bạn đã làm đúng               ';
const fla = 'Số câu bạn đã làm sai                ';
const non = 'Số câu bạn chưa làm                  ';
export default class Result extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      tru: 1,
      fla: 0,
      non: 0,
    };
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.style}>
        <View>
          <Text style={styles.result}>
            {tru} {this.state.tru}
          </Text>
          <Text style={styles.result}>
            {fla} {this.state.fla}
          </Text>
          <Text style={styles.result}>
            {non} {this.state.non}
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={{width: 50, height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Practice');
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\repeat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 50 ,height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Grammar');
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\check.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'space-between',
  },
  result: {
    padding: 20,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#01B1BC',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
