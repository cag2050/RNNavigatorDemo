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

AppRegistry.registerComponent('RNNavigatorDemo', () => RNNavigatorDemo);
