import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Vocabulary extends Component {
  state = {
    togo: 'Gretting',
  };

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <FlatList
        data={Data}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.style}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Vocabulary');
              }}>
              <Image
                style={{
                  marginLeft: 25,
                  marginTop: 5,
                  width: 70,
                  height: 60,
                }}
                source={{uri: item.uril}}
              />
              <Text style={{margin: 30, fontSize: 17}}>{item.content}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.content}
      />
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
let Data = [
  {
    content: 'Chào hỏi',
    img: '../src/VocabularyImage\\gretting.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/hello-2840066-2359574.png  ',
  },
  {
    content: 'Du lịch',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\travel.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/travel-313-1182398.png ',
  },

  {
    content: 'Âm nhạc',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\music.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/music-1470499-1245366.png',
  },

  {
    content: 'Bạn bè',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\friend.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/friend-2799999-2325928.png',
  },

  {
    content: 'Giải trí',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\entertainment.png',
    uril:
      'https://cdn.iconscout.com/icon/free/png-64/casino-chance-gamble-gambling-roulette-table-wheel-4-17661.png',
  },

  {
    content: 'Ăn uống',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\food.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/food-1691073-1432965.png',
  },

  {
    content: 'Mua sắm',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\shopping.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/shopping-bag-basket-buy-cart-ecommerce-package-33267.png',
  },

  {
    content: 'Thời gian',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\time.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/time-2304872-1949602.png',
  },

  {
    content: 'Việc làm',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\job.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/job-1766281-1505686.png',
  },
  {
    content: 'Xe cộ',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\vehicle.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/car-1478795-1250529.png',
  },
  {
    content: 'Thể thao',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\Vocabularyimg\\sport.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/sport-2705452-2251784.png',
  },
  {
    content: 'quốc gia',
    img:
      'C:\\Users\\Sau\\Desktop\\react-native\\app4\\src\\VocabularyImage\\communism.png',
    uril:
      'https://cdn.iconscout.com/icon/premium/png-64-thumb/vietnam-23-169598.png',
  },
];
