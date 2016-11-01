import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#e4e4e4',
    flex: 1,
    marginLeft: 15
  }
})

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    )
  }
}
