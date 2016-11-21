/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import FirstPage from './src/js/component/FirstPage';

export default class RNNavigatorDemo extends Component {
  render() {
    return (
     <Navigator
        initialRoute = {{component:FirstPage}}
//        configureScene = {
//            (route) => {
//                return route.scene || Navigator.SceneConfigs.FadeAndroid;
//            }
//        }
        renderScene = {
            (route,navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }
        }
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  colorBlue:{
    color:'blue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNNavigatorDemo', () => RNNavigatorDemo);
