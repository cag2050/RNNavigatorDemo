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
import GetMoviesFromApi from '../component/GetMoviesFromApi';
import FirstPage from './FirstPage';
import EighthPage from './EighthPage';

var styles = require('../../../src/css/style.js');

export default class SeventhPage extends Component {
    constructor(props) {
        super(props);
    }

    // props的值本页面使用
    static defaultProps = {
        article: "7.恋爱的时光总是过得很快，时光因为短暂，所以珍贵。"
    };

    _jumpForward() {
        const {navigator} = this.props;
        // 或者写成 const navigator = this.props.navigator;
        // 为什么这里可以取得 props.navigator?请看index.android.js中:
        // <Component {...route.params} navigator={navigator} />
        // 这里传递了navigator作为props
        if (navigator) {
            navigator.push({
                name: 'EighthPage',
                component: EighthPage
            })
        }
    }

    _jumpToHome() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'FirstPage',
                component: FirstPage
            })
        }
    }

    _jumpBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
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
                        <TouchableOpacity onPress={this._jumpForward.bind(this)}>
                            <Text>前进>></Text>
                        </TouchableOpacity>
                        <Text>----------------------</Text>
                        <Text>--顺便告诉你济南正在热映的电影(ListView+Fetch实现)--</Text>
                        <GetMoviesFromApi />
                    </ScrollView>
                </View>
                <Copyright />
            </View>
        )
    }
}
