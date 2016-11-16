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

import FirstPage from './FirstPage';

export default class SecondPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:null
        };
    }

    componentDidMount(){
        this.setState({
            id:this.props.id
        })
    }

    _pressButton(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    render(){
        return(
            <View>
                <Text>从页面1获得的参数：{this.state.id}</Text>
                 <TouchableHighlight onPress={this._pressButton.bind(this)}>
                                <Text>点我跳回</Text>
                 </TouchableHighlight>
            </View>

        )
    }
}