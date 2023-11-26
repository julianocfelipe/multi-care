import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("Juliano");
  const [password, setPassword] = useState("1234");
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (username === "Juliano" && password === "1234") {
        navigation.navigate("Seleção de Perfis");
      } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={loginUser}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>LOGIN</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() =>
          alert("Função de recuperar senha não está implementada ainda!")
        }
      >
        <Text style={styles.forgotButtonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5f8abc",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#506986",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    opacity: 0.9,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  forgotButton: {
    width: "80%",
    marginTop: 10,
  },
  forgotButtonText: {
    color: "white",
  },
});

export default LoginScreen;
