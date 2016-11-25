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
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage';
import EighthPage from './EighthPage';
import NinthPage from './NinthPage';
import TenthPage from './TenthPage';

var styles = require('../../../src/css/style.js');

export default class FirstPage extends Component {
    constructor(props) {
        super(props);
        // 此处state的值传给SecondPage
        this.state = {
            article2: "2.他们一起玩耍，直到3、4岁的时候，女孩去了另外一个城市。"
        }
    }

    // props的值本页面使用
    static defaultProps = {
        pages: {
                page1:{name:"FirstPage",component:FirstPage},
                page2:{name:"SecondPage",component:SecondPage},
                page3:{name:"ThirdPage",component:ThirdPage},
                page4:{name:"FourthPage",component:FourthPage},
                page5:{name:"FifthPage",component:FifthPage},
                page6:{name:"SixthPage",component:SixthPage},
                page7:{name:"SeventhPage",component:SeventhPage},
                page8:{name:"EighthPage",component:EighthPage},
                page9:{name:"NinthPage",component:NinthPage},

                page10:{name:"TenthPage",component:TenthPage}
            },
        article: "简单的爱情故事\n1.在一个宁静的小山村，男孩和女孩都来到了这个世界。"
    }

    componentWillMount(){

    }

    componentDidMount() {
        console.log(this.props.pages.page2.component);
    }

    _jumpForward() {
        const {navigator} = this.props;
        // 或者写成 const navigator = this.props.navigator;
        // 为什么这里可以取得 props.navigator?请看index.android.js中:
        // <Component {...route.params} navigator={navigator} />
        // 这里传递了navigator作为props
        if (navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage,
                params: {
                    article2: this.state.article2
                }
            })
        }
    }

    _jumpToHome() {
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        // routers[0].component.name:获取当前路由名字
        // 如果当前路由是首页FirstPage，点击首页，不跳转
        if (navigator && routers[0].component.name != "FirstPage") {
            navigator.push({
                name: 'FirstPage',
                component: FirstPage
            })
        }
    }
    // 跳转的指定的页面:传入页面对象
     _jumpTo(component) {
            const {navigator} = this.props;
            if (navigator) {
                navigator.push({
                    name: component.name,
                    component: component.component,
                    params: {
                        article2: this.state.article2
                    }
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
                    <ScrollView contentContainerStyle={styles.h_v_center}
                                showsVerticalScrollIndicator={true}>
                        <Text>{this.props.article}</Text>
                        <Text>----------------------</Text>
                        <TouchableOpacity onPress={this._jumpForward.bind(this)}>
                            <Text>前进>></Text>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page2)}}>
                            <Text>第2页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page3)}}>
                            <Text>第3页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page4)}}>
                            <Text>第4页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page5)}}>
                            <Text>第5页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page6)}}>
                            <Text>第6页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page7)}}>
                            <Text>第7页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page8)}}>
                            <Text>第8页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page9)}}>
                            <Text>第9页</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this._jumpTo(this.props.pages.page10)}}>
                            <Text>第10页</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <Copyright />
            </View>
        )
    }
}
