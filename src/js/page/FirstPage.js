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

import Copyright from '../component/Copyright';
import SecondPage from './SecondPage';

var styles = require('../../../src/css/style.js');

export default class FirstPage extends Component {
    constructor(props){
        super(props);
        // 此处state的值传给SecondPage
        this.state = {
            article2:"2.他们一起玩耍，直到3、4岁的时候，女孩去了另外一个城市。"
        }
    }
    // props的值本页面使用
    static defaultProps={
        article:"简单的爱情故事\n1.在一个宁静的小山村，男孩和女孩都来到了这个世界。"
    }
    _jumpForward(){
        const {navigator} = this.props;
        // 或者写成 const navigator = this.props.navigator;
        // 为什么这里可以取得 props.navigator?请看index.android.js中:
        // <Component {...route.params} navigator={navigator} />
        // 这里传递了navigator作为props
        if(navigator){
            navigator.push({
                name:'SecondPage',
                component:SecondPage,
                params:{
                    article2:this.state.article2
                }
            })
        }
    }
    _jumpToHome(){
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        // routers[0].component.name:获取当前路由名字
        // 如果当前路由是首页FirstPage，点击首页，不跳转
        if(navigator && routers[0].component.name != "FirstPage"){
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
                    <ScrollView contentContainerStyle={[styles.flex1,styles.h_v_center]}
                        showsVerticalScrollIndicator={true}>
                        <Text>{this.props.article}</Text>
                        <Text>----------------------</Text>
                        <TouchableOpacity onPress={this._jumpForward.bind(this)}>
                            <Text>前进>></Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <Copyright />
            </View>
        )
    }
}
