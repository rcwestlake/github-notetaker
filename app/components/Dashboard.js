import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';
import Profile from './Profile.js';
import Repositories from './Repositories.js';
import api from '../Utils/api.js';
import Notes from './Notes';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {
  makeBackground(btn) {
    let obj = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      flex: 1
    }

    if(btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }

  goToProfile() {
    let userInfo = this.props.userInfo;
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: { userInfo }
    });
  }

  goToRepos() {
    let userInfo = this.props.userInfo;
    api.getRepos(userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          title: 'Repos',
          component: Repositories,
          passProps: {
          userInfo: userInfo,
          repos: res
        }
      });
    });
  }

  goToNotes(){
   api.getNotes(this.props.userInfo.login)
     .then((jsonRes) => {
       jsonRes = jsonRes || {};
       console.log(jsonRes);
       this.props.navigator.push({
         component: Notes,
         title: 'Notes',
         passProps: {
           notes: jsonRes,
           userInfo: this.props.userInfo
         }
       });
     });
   }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.userInfo.avatar_url }} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={() => this.goToProfile()}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={() => this.goToRepos()}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={() => this.goToNotes()}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
