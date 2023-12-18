import React, { useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AuthContext } from "../context";

// import {
//   signInWithEmailAndPassword,
//   signUpWithEmailAndPassword,
// } from "../auth";

const Home = () => {
  const context = useContext(AuthContext);
  console.log({ context });

  const navigation = useNavigation();
  return (
    <View>
      <Text>Auth Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
