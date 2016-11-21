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

var styles = require('../../../src/css/style.js')

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
//            <View>
//                <Text style={styles.font20}>请听我讲一个爱情故事</Text>
//                <TouchableHighlight onPress={this._pressButton.bind(this)}>
//                    <Text style={[styles.colorBlue,styles.font16]}>点我跳转</Text>
//                </TouchableHighlight>
//                <TouchableHighlight >
//                    <Text>{this.props.aaaa}</Text>
//                </TouchableHighlight>
//                <Text>Copyright 山水一程</Text>
//            </View>
            <View style={styles.flexContainer}>
                <View style={styles.header}>
                    <View style={[styles.home, styles.h_v_center]}>
                        <Text>主页</Text>
                    </View>
                    <View style={[styles.subject, styles.h_v_center]}>
                        <Text>请听我讲一个爱情故事</Text>
                    </View>
                    <View style={[styles.back, styles.h_v_center]}>
                        <Text>后退</Text>
                    </View>
                </View>
                <View style={[styles.article, styles.h_v_center]}>
                    <Text>1</Text>
                </View>
                <View style={[styles.footer, styles.h_v_center]}>
                    <Text>Copyright 山水一程</Text>
                </View>
            </View>
        )
    }
}
