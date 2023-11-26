import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import ProfileSelectionScreen from "./screens/ProfileSelectionScreen";
import ProfileDetails from "./screens/ProfileDetails";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Seleção de Perfis"
            component={ProfileSelectionScreen}
          />
          <Stack.Screen name="Detalhes do Perfil" component={ProfileDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
