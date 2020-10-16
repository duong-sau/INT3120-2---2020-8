import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  AccessToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
let L;
global.grammarAchivements = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export default class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
    L = this;
    this.state = {
      isLogin: 0,
      userName: '',
      userPicture: '',
      userToken: '',
    };
  }
  _loadAchivements() {
    try {
      let achivementsValue;
      let q1 = firebase.database().ref('user');
      console.log('lấy thông tin từ token : ', L.state.userToken);
      q1.on('value', (datasnap) => {
        console.log(' tải được :', datasnap.val());
        achivementsValue = datasnap.val()[
          "EAAKdU4ZBXPbQBAMUzavRCs7KjRnAP3xF5IOqbToCibhz87W2fez9hka5EhRUkbtpZA7SNXi150TPerkgPziqmtiUK1skYj1srUDoo6GcSsVsCQclQtFxhtbW6qZAUjufmSNFtcIgEvId1xVo65Ka89fPj5QHwX1gbqNaUOc2j5r0NQEoiOVr1lkEUoEmzgvKreBbwmqmeWbtqjuugKFrCcBVKc2ITaxVqWkXt1hWzil3pd2ZC85e"
        ].achivement;
        console.log(
          'lấy được nội dung thành tích của người dùng là ',
          achivementsValue,
        );
        if (achivementsValue != null) {
          global.grammarAchivements = achivementsValue;
          console.log(
            'thành tích người dùng chuyển thành chỗi này: ',
            global.grammarAchivements,
          );
        }
      });
    } catch (e) {
      console.log('lỗi');
    }
  }

  static propTypes = {};
  _resume = async () => {
    let userName = await AsyncStorage.getItem('userName');
    let userPicture = await AsyncStorage.getItem('userPicture');
    let userToken = await AsyncStorage.getItem('userToken');
    this.setState({
      userName: userName,
      userPicture: userPicture,
      userToken: userToken,
    });
    if (this.state.userName == null && this.state.userToken == null) {
      this.setState({
        isLogin: 0,
      });
      console.log(' chưa đăng nhập ');
    } else {
      this.setState({
        isLogin: 1,
      });
      L._loadAchivements();
      console.log(' đã đăng nhập từ trước');
    }
  };
  _save = async () => {
    await AsyncStorage.setItem('userName', this.state.userName);
    await AsyncStorage.setItem('userPicture', this.state.userPicture);
    await AsyncStorage.setItem('userToken', this.state.userToken);
  };
  _remove = async () => {
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userPicture');
    await AsyncStorage.removeItem('userToken');
    L.setState({
      isLogin: 0,
    });
  };
  _getAuthUser() {}
  _setAuthUser() {
    console.log('đã tải lên firebase');
    let userObj = {
      userName: L.state.userName,
      userPicture: L.state.userPicture,
    };
    let userFirebase =
      '{' +
      '"' +
      L.state.userToken.toString() +
      '"' +
      ' : ' +
      JSON.stringify(userObj) +
      ' }';
    console.log(userFirebase);
    let userFirebaseObj = JSON.parse(userFirebase);
    console.log(userFirebaseObj);
    const user = firebase.database().ref('user');
    user.set(userFirebaseObj);
  }
  _auth() {}
  componentDidMount() {
    this._resume();
  }

  render() {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Text style={styles.titleApp}>FoxEnglish</Text>
        <Text style={styles.wordApp}>Learning is the eye of the mind</Text>
        <MrFox />
        <View style={styles.style}>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('lỗi');
              } else if (result.isCancelled) {
                console.log('hủy');
              } else {
                console.log('đăngnhập:   ');
                AccessToken.getCurrentAccessToken().then((data) => {
                  const infoRequest = new GraphRequest(
                    '/me?fields=name,picture',
                    null,
                    this._responseInfoCallback,
                  );
                  this.setState({userToken: data.accessToken});
                  console.log('chìa khóa:   ', this.state.userToken);
                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() => {
              console.log('logout.');
              L._remove();
            }}
          />
        </View>
      </View>
    );
  }
  _responseInfoCallback = (error, result) => {
    if (error) {
    } else {
      L.setState({
        userName: result.name,
        userPicture: result.picture.data.url,
        isLogin: 1,
      });
      console.log(L.state.userName);
      console.log(L.state.userPicture);
      console.log(L.state.userToken);
      L._save();
      L._loadAchivements();
    }
  };
}
export class MrFox extends Component {
  render() {
    if (L.state.isLogin === 0) {
      console.log(' trả về fox ở chế độ chưa đăng nhạp');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../src/mrfox.png')} />
          <Text style={styles.textTitle}>Sign In With</Text>
        </View>
      );
    } else {
      console.log(' trả về fox ở chế độ đã đăng nhập');
      return (
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: L.state.userPicture}} />
          <Text style={styles.textTitle}>Xin Chào {L.state.userName}</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  titleApp: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(50,205,50)',
    textAlign: 'center',
    marginTop: 60,
  },
  wordApp: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  titleimage: {
    marginLeft: '5%',
    marginTop: '10%',
    height: '20%',
  },

  textTitle: {
    color: 'black',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 0,
    marginLeft: 0,
    width: 250,
    height: 250,
    borderRadius: 150,
  },
  style: {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  facebook_text: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  google_text: {
    fontSize: 24,
    color: 'black',
  },
  facebook_icon: {
    marginTop: 2,
  },
  facebook_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_button: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  google_icon: {
    marginTop: 3,
    marginLeft: -10,
    marginRight: 10,
  },
  google_image: {
    width: 28,
    height: 28,
  },
  facebook: {
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#3b5998',
    elevation: 7,
  },
  google: {
    alignItems: 'center',
    width: '40%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 7,
  },
  fox: {
    width: '30%',
    height: '10%',
  },
});
