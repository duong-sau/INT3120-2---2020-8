import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
var P;
export default class Practice extends Component {
  constructor({props}) {
    super(props);
    P = this;
    this.state = {
      ans0: 0,
      ans1: 0,
      ans2: 0,
      ans3: 0,
      que: 1,
      num:1,
    };
  }

  select(id) {
    if (id === 'A') {
      this.setState({
        ans0: 1,
        ans1: 0,
        ans2: 0,
        ans3: 0,
      });
    }
    if (id === 'B') {
      this.setState({
        ans0: 0,
        ans1: 1,
        ans2: 0,
        ans3: 0,
      });
    }

    if (id === 'C') {
      this.setState({
        ans0: 0,
        ans1: 0,
        ans2: 1,
        ans3: 0,
      });
    }

    if (id === 'D') {
      this.setState({
        ans0: 0,
        ans1: 0,
        ans2: 0,
        ans3: 1,
      });
    }
  }
  render() {
    return (
      <View style={styles.style}>
        <View style={styles.question}>
          <Text style={styles.question}>
            {this.state.que}. {question}
          </Text>
        </View>
        <Answer content={answer[0]} id={'A'} isselect={this.state.ans0} />
        <Answer content={answer[1]} id={'B'} isselect={this.state.ans1} />
        <Answer content={answer[2]} id={'C'} isselect={this.state.ans2} />
        <Answer content={answer[3]} id={'D'} isselect={this.state.ans3} />
        <View style={styles.footer}>
          <Text style={styles.curent}>{this.state.que} /{this.state.num}</Text>
          <View style={styles.nul}/>
          <TouchableOpacity
            style={{width: '100%', height: 50}}
            onPress={() => {
              this.props.navigation.navigate('Result');
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
let question =
  'I’m not sure, but Tony________ probably get that demanding job.';
let answer = ['must', 'need', 'ought', 'might'];
export class Answer extends Component {
  render() {
    if (this.props.isselect === 0) {
      return (
        <TouchableOpacity
          style={styles.answer}
          onPress={() => {
            P.select(this.props.id);
          }}>
          <Text style={styles.content}>
            {this.props.id}. {this.props.content}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.answer}
          onPress={() => {
            P.select(this.props.id);
          }}>
          <Text style={styles.selectContent}>
            {this.props.id}. {this.props.content}
          </Text>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  style: {
    display: 'flex',
    flex: 1,
  },
  curent:{
    fontSize: 30,
  fontWeight:'bold',
  },
  question: {
    marginLeft:'2%',
    fontSize: 18,
    flex: 4,
  },
  answer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'black',
  },
  selectContent: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'green',
  },
  footer: {
    flexDirection:'row',
    backgroundColor: '#01B1BC',
    height: 50,
    justifyContent: 'space-between',

  },
  nul:{
    width:"75%"
  }

});
