import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'rainy',
        gradient: ["#0F2027", "#203A43"]
    },
    Snow: {
        iconName: 'cloud-snow',
        gradient: ["#2980B9", "#6DD5FA"]
    },
    Clear: {
        iconName: 'cloud',
        gradient: ["#2193b0", "#6dd5ed"]
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient: ["#2193b0", "#6dd5ed"]
    }
}
export default function Weather({temp, condition}){
    return (

        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={80} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.clear}>{condition}</Text>
            </View>
            <View style={styles.halfContainer}></View>
        </LinearGradient>
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
        color: "white"

    }, clear: {
        fontSize: 26,
        color: "white"

    }
})