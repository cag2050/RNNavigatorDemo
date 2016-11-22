import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';

import FirstPage from './FirstPage';

var styles = require('../../../src/css/style.js');

export default class TenthPage extends Component {
    constructor(props){
        super(props);
    }
    // props的值本页面使用
    static defaultProps={
        article:"10.十全十美，祝福男孩和女孩的生活。"
    }

    _jumpToHome(){
            const {navigator} = this.props;
            if(navigator){
                navigator.push({
                    name:'FirstPage',
                    component:FirstPage
                })
            }
        }
    _jumpBack(){
            const {navigator} = this.props;
            if(navigator){
                navigator.pop();
            }
    }

    render(){
        return(
            <View style={styles.flexContainer}>
                <View style={styles.header}>
                    <View style={[styles.home, styles.h_v_center]}>
                        <TouchableOpacity onPress={this._jumpToHome.bind(this)}>
                            <Text>主页</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.subject, styles.h_v_center]}>
                        <Text>请听我讲一个爱情故事</Text>
                    </View>
                    <View style={[styles.back, styles.h_v_center]}>
                        <TouchableOpacity onPress={this._jumpBack.bind(this)}>
                            <Text>后退</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.article, styles.h_v_center]}>
                    <ScrollView contentContainerStyle={[styles.flex1,styles.h_v_center]}>
                        <Text>{this.props.article}</Text>
                        <Text>----------------------</Text>
                        <TouchableOpacity onPress={this._jumpToHome.bind(this)}>
                            <Text>返回首页</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={[styles.footer, styles.h_v_center]}>
                    <Text>Copyright 山水一程</Text>
                </View>
            </View>
        )
    }
}
