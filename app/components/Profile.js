import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Badge from './Badge.js';
import Separator from '../Helpers/Separator.js';


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
  },
  rowContainer: {
      padding: 10
  },
  rowTitle: {
      color: '#48BBEC',
      fontSize: 16
  },
  rowContent: {
      fontSize: 19,
      marginLeft: 3
  }
});

export default class Profile extends Component {
  getRowTitle(item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    let userInfo = this.props.userInfo
    let topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
    let list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
              <Text style={styles.rowContent}>{userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}
