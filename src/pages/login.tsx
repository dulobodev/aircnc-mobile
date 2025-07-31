import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import logo from "../assets/logo.png";

import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [email, setEmail] = useState("");
    const [techs, setTechs] = useState("");
  
    useEffect(() => {}, []);
  
    async function handleSubmit() {
      try {
        const response = await api.post("/session", { email });
        const { _id } = response.data.usuario;
        
        await AsyncStorage.setItem("user", _id);
        await AsyncStorage.setItem("techs", techs);
  
        console.log("Login feito com sucesso!");
      } catch (err) {
        console.error("Erro ao fazer login:", err);
      }
    }
  
    return(
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
      paddingHorizontal: 30,
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
  
