import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";

import logo from "../assets/logo.png";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../services/routes";

export function List() {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}/>

            <Text> Trocou para List </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    logo: {
        height:32,
        resizeMode:'contain',
        alignContent:'center',
        marginTop:60,
    }
})