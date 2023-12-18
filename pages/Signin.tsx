import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login } from "../auth";
import { AuthContext } from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = () => {
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  const [{ email, password }, setFormValue] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (context.token) {
      navigation.navigate("Welcome");
    }
  }, [context.token]);

  const handleSignIn = async (values: { email: string; password: string }) => {
    try {
      const token = await login(values);
      AsyncStorage.setItem("token", token);
      context.setAuthentication(token);
      navigation.navigate("Welcome");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={email}
        placeholder='Email'
        onChangeText={(text) => {
          setFormValue((prevState) => ({ ...prevState, email: text }));
        }}
      />
      <TextInput
        value={password}
        placeholder='Password'
        onChangeText={(text) => {
          setFormValue((prevState) => ({ ...prevState, password: text }));
        }}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => handleSignIn({ email, password })}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <Text>
        <Link to={"/SignIn"}>Not Regesteried ? Sign IN</Link>
      </Text>
    </View>
  );
};

export default SignInScreen;
