import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
export default class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      islogin: 0,
    };
  }
  loginFB() {}
  loginGg() {}
  static propTypes = {};

  componentDidMount() {}

  render() {
    if (this.state.islogin === 0) {
      return (
        <View style={{backgroundColor: '#01B1BC'}}>
          <View style={styles.titleimage}>
            <Image
              style={styles.image}
              source={require('C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\fox.png')}
            />
            <Text style={styles.title}>SYNERGISTIC{'\n'}ENGLISH</Text>
          </View>
          <View style={styles.style}>
            <View style={styles.fbbut}>
              <TouchableOpacity
                onPress={() => {
                  this.loginFB();
                }}>
                <Text style={styles.buttitle}>FACEBOOK</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ggbut}>
              <TouchableOpacity
                onPress={() => {
                  this.loginGg();
                }}>
                <Text style={styles.buttitle}>GOOGLE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  titleimage: {
    marginLeft: '5%',
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row',
    height: '20%',
  },
  title: {
    flex: 5,
    fontFamily: 'blod',

    fontSize: 30,
    color: '#000000',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  style: {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  buttitle: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  fbbut: {
    alignItems: 'center',
    width: '60%',
    height: '10%',
    borderRadius: 50,
    backgroundColor: 'blue',
    marginTop: '45%',
  },
  ggbut: {
    alignItems: 'center',
    width: '60%',
    height: '10%',
    borderRadius: 50,
    backgroundColor: 'red',
    marginBottom: '45%',
  },
  fox: {
    width: '30%',
    height: '10%',
  },
});
