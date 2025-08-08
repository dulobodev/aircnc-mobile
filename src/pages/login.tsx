<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import logo from "../assets/logo.png";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../services/routes";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

export function Login({navigation}: LoginScreenProps) {
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");
  
    useEffect(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) navigation.navigate('List')
      })
    }, []);
  
    async function handleSubmit() {
      try {
        const response = await api.post("/session", { email });
        const { _id } = response.data.usuario;
        
        await AsyncStorage.setItem("user", _id);
        await AsyncStorage.setItem("techs", techs);
  
        navigation.navigate('List')
      } catch (err) {
        console.error("Erro ao fazer login:", err);
      }
    }
  
    return(

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image source={logo}></Image>
          <View style={styles.form}>
            <Text style={styles.label}>SEU E-MAIL *</Text>
    
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail..."
              placeholderTextColor="#0007"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
    
            <Text style={styles.label}>TECNOLOGIAS</Text>
    
            <TextInput
              style={styles.input}
              placeholder="Tecnologias de interesse"
              placeholderTextColor="#0007"
              value={techs}
              onChangeText={setTechs}
            />
    
            <TouchableOpacity
              style={styles.button}
              // onPress={() => {}}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      alignSelf: "stretch",
      paddingHorizontal: 45,
      marginTop: 30,
    },
    label: {
      alignSelf: "stretch",
      paddingHorizontal: 0,
      paddingTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#0003",
      paddingHorizontal: 20,
      fontSize: 16,
      color: "#444",
      height: 44,
      marginBottom: 20,
      borderRadius: 2,
    },
    button: {
      height: 42,
      backgroundColor: "#f05a5b",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  
=======
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import logo from "../assets/logo.png";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../services/routes";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
}

export function Login({navigation}: LoginScreenProps) {
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");
  
    useEffect(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) navigation.navigate('List')
      })
    }, []);
  
    async function handleSubmit() {
      try {
        const response = await api.post("/session", { email });
        const { _id } = response.data.usuario;
        
        await AsyncStorage.setItem("user", _id);
        await AsyncStorage.setItem("techs", techs);
  
        navigation.navigate('List')
      } catch (err) {
        console.error("Erro ao fazer login:", err);
      }
    }
  
    return(

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image source={logo}></Image>
          <View style={styles.form}>
            <Text style={styles.label}>SEU E-MAIL *</Text>
    
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail..."
              placeholderTextColor="#0007"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
    
            <Text style={styles.label}>TECNOLOGIAS</Text>
    
            <TextInput
              style={styles.input}
              placeholder="Tecnologias de interesse"
              placeholderTextColor="#0007"
              value={techs}
              onChangeText={setTechs}
            />
    
            <TouchableOpacity
              style={styles.button}
              // onPress={() => {}}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Encontrar Spots</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      alignSelf: "stretch",
      paddingHorizontal: 45,
      marginTop: 30,
    },
    label: {
      alignSelf: "stretch",
      paddingHorizontal: 0,
      paddingTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#0003",
      paddingHorizontal: 20,
      fontSize: 16,
      color: "#444",
      height: 44,
      marginBottom: 20,
      borderRadius: 2,
    },
    button: {
      height: 42,
      backgroundColor: "#f05a5b",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  
>>>>>>> a6d4a9b (componente Spotlist feito)
