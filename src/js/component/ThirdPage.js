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
import SecondPage from './SecondPage';

export default class ThirdPage extends Component {
    constructor(props){
        super(props);
    }

    back(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop();
        }
    }

//    gotoThird(){
//       const {navigator} = this.props;
//       if(navigator){
//        navigator.push({
//            component:ThirdPage,
//            params:{
//                id:2,
//                info:'from second page'
//            },
//            scene:Navigator.SceneConfigs.VerticalDownSwipeJump,
//        })
//       }
//
//    }

    render(){
        return(
            <View>
                <Text>third page</Text>
               <TouchableHighlight onPress= { ()=>this.back() }>
                <Text>back</Text>
               </TouchableHighlight>
               <TouchableHighlight onPress= { ()=>this.gotoThird() }>
                    <Text>gotoThird</Text>
                </TouchableHighlight>
                <Text>{this.props.id}</Text>
                  <Text>{this.props.info}</Text>
            </View>
        )
    }
}