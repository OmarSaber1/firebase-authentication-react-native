import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import SignUpScreen from "./pages/Signup";
import SignInScreen from "./pages/Signin";
import { AuthContextProvider } from "./context";
import Welcome from "./pages/Welcome";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='Welcome' component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
