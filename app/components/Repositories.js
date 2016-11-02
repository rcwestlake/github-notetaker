import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Badge from './Badge.js';
import Separator from '../Helpers/Separator.js';
import Web from '../Helpers/Web';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default class Repositories extends Component {
  openPage(url) {
    this.props.navigator.push({
      title: 'Web View',
      component: Web,
      passProps: { url }
    })
  }
  render() {
    let repos = this.props.repos;
    let list = repos.map((item, index) => {
      let desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />
      console.log(repos[index].stargazer_count);
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => this.openPage(repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}> {repos[index].name} </Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}


Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}
