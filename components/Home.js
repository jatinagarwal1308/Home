import React, { Component } from 'react';
import Card from './card'
import { db } from './config'
import { ActivityIndicator, StyleSheet, Text, StatusBar, ScrollView, ImageBackground } from 'react-native';

export default class App extends Component {
 
  constructor(props){
    super(props)
    
    this.state = {
      light : false,
      AC : false,
      Dustbin : false,
      count : 0 
    }
  }

  render() {

    if(!this.state.count){
      db.ref('/').once('value', querySnapShot =>{
        
        this.setState({ 
          light : querySnapShot.val().Light.togglelight, 
          AC : querySnapShot.val().AC.toggleAC,
          Dustbin : querySnapShot.val().Dustbin.toggleDustbin,
          count : 1 })
      })
    }

    if(this.state.count){
      return (
          <ImageBackground style={styles.image} source={require('./assets/final.png')}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.welcome}>
              Home Assistant
            </Text>
            <ScrollView>
              <Card data={this.state}/>
            </ScrollView>
          </ImageBackground>
      )
    }

    else{
      return(
        <ImageBackground style={styles.image} source={require('./assets/final.png')}>
        <StatusBar barStyle="dark-content" />          
            <Text style={{flex : 1}}/>
            <ScrollView>
              <ActivityIndicator size="large" color="#ffffff" />
            </ScrollView>
        </ImageBackground>
      )
    }
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    color: 'white',
    textAlign: 'center',
    flex: 0.6,
    fontWeight: "bold",
    fontFamily: 'monospace',
    fontSize: 40,
  }
});