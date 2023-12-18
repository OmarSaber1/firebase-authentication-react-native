import React, { useState } from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createUser } from "../auth";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [{ email, password }, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async (values: { email: string; password: string }) => {
    try {
      console.log({ values });

      createUser(values);

      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
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
      <TouchableOpacity onPress={() => handleSignUp({ email, password })}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <Link to={"/SignIn"}>Sign in</Link>
    </View>
  );
};

export default SignUpScreen;
