import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';


export default class extends React.Component{

  getLocation = async () => {
    try {
      const response = await Location.requestBackgroundPermissionsAsync();
      console.log(response);
      let location = await Location.getCurrentPositionAsync();
      console.log(`Location: ${JSON.stringify(location)}`)
    }catch (error) {
      console.log(error)
      Alert.alert("Can't get weather data for now .. ")
    }

  }


  componentDidMount(){
    this.getLocation();

  }

  render(){
    return (
      <Loading />
    );
  }

};