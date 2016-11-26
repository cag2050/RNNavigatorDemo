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

var styles = require('../../../src/css/style.js');

export default class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps() {

    }

    render() {
        return (
            <View style={[styles.footer, styles.h_v_center]}>
                <Text>Copyright 山水一程</Text>
            </View>
        )
    }
}