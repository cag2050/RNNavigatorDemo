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
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2)=> r1 !== r2
            }),
            loaded: false
        };
    }

    static defaultProps() {

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        //let REQUEST_URL = "http://api.douban.com/v2/movie/in_theaters";
        let REQUEST_URL = "http://api.douban.com/v2/movie/in_theaters?city=济南";
        fetch(REQUEST_URL)
            // fetch post方式不成功，未知原因
            //fetch(REQUEST_URL, {
            //    method: "post",
            //    //headers: {
            //    //    'Accept': 'application/json',
            //    //    'Content-Type': 'application/json'
            //    //},
            //    //body: JSON.stringify({
            //    //    city: "济南"
            //    //})
            //    headers: {
            //        "Content-Type": "application/x-www-form-urlencoded"
            //    },
            //    body: "city=济南"
            //})
            .then((response) => response.json())
            .then((responseData)=> {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    loaded: true
                })
            })
            .done();
    }

    renderData(movie) {
        return (
            <Text>{movie.title}</Text>
        )
    }

    renderLoading() {
        return (
            <Text>正在加载中...</Text>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoading();
        }
        return (
            <View style={[styles.flex1, styles.h_v_center]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderData}
                    />
            </View>
        )
    }
}