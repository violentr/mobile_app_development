import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Weather({temp, condition}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Ionicons name="rainy" size={80} color="black"/>
                <Text style={styles.temp}>Temperature: {temp}°</Text>
                <Text style={styles.clear}>Condition: {condition}</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
    );
}

Weather.propTypes ={
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, temp: {
        fontSize: 26,

    }, clear: {
        fontSize: 26,

    }
})