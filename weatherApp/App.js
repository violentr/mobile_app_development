import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather'


export default class extends React.Component{

  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
    const g weather_api_key = process.env.weather_api_key

    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}&units=metric`
    console.log(api_url)
    const condition = "Clear"
    const {data: {main: {temp}, weather}} = await axios.get(api_url)
    this.setState({isLoading: false, temp: temp, condition: weather[0].main})
    console.log(data)
  }

  getLocation = async () => {
    try {
      const response = await Location.requestBackgroundPermissionsAsync();
      console.log(response);
      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(`Location: ${JSON.stringify(`Long: ${longitude} Lat: ${latitude}`)}`)

      this.getWeather(latitude, longitude);

      this.setState({isLoading: false})

    }catch (error) {
      console.log(error)
      Alert.alert("Can't get the weather data for now .. ")
    }

  }


  componentDidMount(){
    this.getLocation();

  }

  render(){
    const {isLoading, temp, condition} = this.state
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }

};