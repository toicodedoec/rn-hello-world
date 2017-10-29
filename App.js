import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';

class PostCommentsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>PostCommentsScreen</Text>
      </View>
    )
  }
}

const AppNavigator = new StackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '#ChuyenCuaDev'
    }
  },
  post: {
    screen: PostScreen,
    navigationOptions: {
      title: '#ChuyenCuaDev'
    }
  },
  postComments: {
    screen: PostCommentsScreen,
    navigationOptions: {
      title: '#ChuyenCuaDev'
    }
  }
});

export default AppNavigator;