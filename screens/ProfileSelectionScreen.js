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
    receivesVisits: true,
    visitCount: 2,
    medications: [
      { name: "Dipirona", time: "Manhã" },
      { name: "Valsartana", time: "Noite" },
    ],
    degenerativeDisease: "Artrite",
    image: require("../assets/profile1.jpg"),
  },
  {
    id: 2,
    name: "Astolfo",
    age: 80,
    receivesVisits: true,
    visitCount: 3,
    medications: [
      { name: "Antidepressivo", time: "Manhã" },
      { name: "Pressat", time: "Noite" },
    ],
    degenerativeDisease: "Alzheimer",
    image: require("../assets/profile2.jpg"),
  },
  {
    id: 3,
    name: "Jovelina",
    age: 78,
    receivesVisits: false,
    medications: [
      { name: "Olmecor", time: "Manhã" },
      { name: "Espironolactona", time: "Noite" },
    ],
    degenerativeDisease: "Parkinson",
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
