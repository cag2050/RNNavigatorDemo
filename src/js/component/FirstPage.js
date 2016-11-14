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
import ThirdPage from './ThirdPage';

class GotoNextPageComponent extends Component {
    render(){
        return (
            <TouchableOpacity onPress={()=>{
                this.props.that.gotoSecond(this.props.SceneName)
            }}>
                <Text>{this.props.SceneName} ==> SecondPage</Text>
           </TouchableOpacity>
        )
    }
}

function createGotoNextPage(sceneName,key){
    return <GotoNextPageComponent key={key} sceneName={sceneName} that={this} />
}

export default class FirstPage extends Component {
    constructor(props){
        super(props);
    }

    gotoSecond(sceneName){
        let sceneKey = Object.keys(Navigator.SceneConfigs)[3];
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                component:SecondPage,
//                scene:Navigator.SceneConfigs[sceneName],
            })
        }
    }

    gotoThird(){
            const {navigator} = this.props;
            if(navigator){
                navigator.push({
                    component:SecondPage,
                    params:{
                        id:1,
                        info:'from FirstPage'
                    }
                })
            }
        }


    render(){
        const sceneKeys = Object.keys(Navigator.SceneConfigs);
        return(
            <View>
                <Text>first page</Text>
                {sceneKeys.map(createGotoNextPage.bind(this))}
            </View>
        )
    }
}