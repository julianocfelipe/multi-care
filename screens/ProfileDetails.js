import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ProfileDetails = ({ route }) => {
  const { profileId, profiles } = route.params;
  const selectedProfile = profiles.find((profile) => profile.id === profileId);

  if (!selectedProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Detalhes do perfil não encontrado</Text>
      </View>
    );
  }

  const {
    name,
    age,
    receivesVisits,
    visitCount,
    medications,
    degenerativeDisease,
    image,
  } = selectedProfile;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.profileImage} />

      {renderDetail("Nome", name)}
      {renderDetail("Idade", age)}
      {renderDetail("Recebe visitas?", receivesVisits ? "Sim" : "Não")}
      {receivesVisits && renderDetail("Quantidade visitantes", visitCount)}

      <Text style={styles.detailText}>Medicamentos:</Text>
      {Array.isArray(medications) && medications.length > 0 ? (
        medications.map(renderMedication)
      ) : (
        <Text style={styles.detailText}>Sem medicamentos</Text>
      )}

      {renderDetail("Doenças degenerativas", degenerativeDisease)}
    </ScrollView>
  );
};

const renderDetail = (label, value) => (
  <Text style={styles.detailText}>{`${label}: ${value}`}</Text>
);

const renderMedication = (medication, index) => (
  <Text
    key={index}
    style={styles.detailText}
  >{`${medication.name} - ${medication.time}`}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});

export default ProfileDetails;
