import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import SecondPage from './SecondPage';

export default class FirstPage extends Component {
    constructor(props){
        super(props);
        // 此处state的值传给SecondPage
        this.state = {
            id:2
        }
    }
    // props的值本页面使用
    static defaultProps={
        article1:2222
    }
    _pressButton(){
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'SecondPage',
                component:SecondPage,
                params:{
                    id:this.state.id
                }
            })
        }
    }

    render(){
        return(
            <View>
                <Text style={styles.font20}>请听我讲一个爱情故事</Text>
                <TouchableHighlight onPress={this._pressButton.bind(this)}>
                    <Text style={[styles.colorBlue,styles.font16]}>点我跳转</Text>
                </TouchableHighlight>
                <TouchableHighlight >
                    <Text>{this.props.aaaa}</Text>
                </TouchableHighlight>
                <Text>Copyright 山水一程</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  colorBlue:{
        color:'blue',
  },
  font16:{
          fontSize:16
  },
  font20:{
   fontSize:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});