import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Go to PostScreen"
          onPress={() => {
            this.props.navigation.navigate('post');
          }}
        >
        </Button>
      </View>
    )
  }
}

class PostScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>PostScreen</Text>
        <Button
          title="Go to PostCommentsScreen"
          onPress={() => {
            this.props.navigation.navigate('postComments');
          }}
        />
      </View>
    )
  }
}

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