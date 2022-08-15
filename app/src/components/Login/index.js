import React, { useState } from "react";
import { Pressable, Text, View, Image, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Touchable } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';


export function Login({ navigation: { setParams, goBack }, route }) {
  const [showPassword, setShowPassword] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState("none");


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
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput 
                style={{...styles.input, ...styles.inputPassword}}
                placeholder={"Senha "} 
                secureTextEntry={!showPassword} 
                onChangeText={(text) => console.log(text)}
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

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.errorMsgText(messageDisplay)}>Mesagens de erros aqui</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}