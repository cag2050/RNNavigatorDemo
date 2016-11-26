/**
 * Created by cag on 2016/11/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
    } from 'react-native';

var styles = require('../../../src/css/style.js');

export default class GetMoviesFromApi extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                'john', 'jeff', 'tom'
            ])
        };
    }

    static defaultProps() {

    }

    render() {
        return (
            <View style={[styles.flex1, styles.h_v_center]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=><Text>{rowData}</Text>}
                    />
            </View>
        )
    }
}