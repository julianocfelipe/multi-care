import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";

const profiles = [
  {
    id: 1,
    name: "Jaime",
    age: 75,
    receivesVisits: "Sim",
    visitCount: 2,
    medications: ["Medicamento 1", "Medicamento 2"],
    degenerativeDisease: "Artrite",
    image: require("../assets/profile1.jpg"),
  },
  {
    id: 2,
    name: "Astolfo",
    age: 80,
    receivesVisits: "Não",
    visitCount: 2,
    medications: "Medicamento x",
    degenerativeDisease: "Artrite",
    image: require("../assets/profile2.jpg"),
  },
  {
    id: 3,
    name: "Jovelina",
    age: 60,
    receivesVisits: "Sim",
    visitCount: 2,
    medications: "Medicamento x",
    degenerativeDisease: "Artrite",
    image: require("../assets/profile3.jpg"),
  },
];

const ProfileSelectionScreen = ({ navigation }) => {
  const handleProfileSelection = (profileId) => {
    navigation.navigate("Detalhes do Perfil", { profileId, profiles });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {profiles.map((profile) => (
        <TouchableOpacity
          key={profile.id}
          style={styles.profileButton}
          onPress={() => handleProfileSelection(profile.id)}
        >
          <Image source={profile.image} style={styles.profileImage} />
          <Text style={styles.buttonText}>{profile.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5f8abc",
    paddingVertical: 10,
  },
  profileButton: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileSelectionScreen;
