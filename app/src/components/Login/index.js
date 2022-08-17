import React, { useState, useEffect } from "react";
import { Pressable, Text, View, Image, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Touchable, Alert } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';



export function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState("none");
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    verifyUser();
  }, []);


  function showErrorMessage(message) {
    setMessageDisplay(message);

    setTimeout(() => {
      setMessageDisplay("none");
    }, 4000);
  }

  async function handleLogin(loginParams) {
    const {data} = await api.post("/login",
      loginParams.username ? loginParams : login
    );
    
    if (data.message) {
      showErrorMessage(data.message);
      await AsyncStorage.clear();
    } else {
      try {
        await AsyncStorage.setItem("@user", JSON.stringify(data.user));
        navigation.navigate("Admin");

      } catch(e) {
        showErrorMessage("Erro ao entrar.");
      }
    }
  }

  async function verifyUser() {
    const user = await AsyncStorage.getItem("@user");

    if (!!user) {
      biometric();
    } else {
      console.log("User dislogado");
    }
  }

  async function biometric() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();

    if (hasHardware) {
      const authSaved = await LocalAuthentication.isEnrolledAsync()

      if (authSaved) {
        const biometricResult = await LocalAuthentication.authenticateAsync();
        
        if (biometricResult.success) {
          let user = await AsyncStorage.getItem("@user");
          user = JSON.parse(user);

          return handleLogin({ 
            username: user.name,  
            password: user.password
          });
        }
        
      }
    }

    await AsyncStorage.clear();
  }

  return (
    <KeyboardAvoidingView 
      style={styles.Container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image resizeMode="center" style={styles.logoImg} source={require("../../../assets/images/logo.png")} />
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Nome de usuário</Text>
            <TextInput 
              style={styles.input}
              placeholder={"Usuário "}
              onChangeText={text => setLogin({ ...login, username: text })} 
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput 
                style={{...styles.input, ...styles.inputPassword}}
                placeholder={"Senha "} 
                secureTextEntry={!showPassword} 
                onChangeText={text => setLogin({ ...login, password: text })}
              />
              <Pressable 
                onPress={() => setShowPassword(showPassword == false)}
                style={styles.showPasswordIcon} 
              >
                <FontAwesome5 
                  name={showPassword ? "eye-slash" : "eye"} 
                  color={"rgba(0, 0, 0, 0.5)"}
                  size={18}
                />
              </Pressable>
            </View>

          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.errorMsgText(messageDisplay)}>{messageDisplay}</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}