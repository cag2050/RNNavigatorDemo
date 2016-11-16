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
        this.state = {
            id:2
        }
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
                <TouchableHighlight onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableHighlight>
            </View>
        )
    }
}