import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "../styles/styles";

import PageContainer from "../components/PageContainer";

const Input_Page = ({ navigation }) => {
  const [orderNumber, setOrderNumber] = useState("");
  const [confirmationPin, setConfirmationPin] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  const handleNavigation = () => {
    // Implement navigation to the scan page here
    navigation.navigate("Scan_Page");
  };
  return (
    <PageContainer>
      <View style={{}}>
        <Text style={{ fontSize: 28, marginBottom: 20  }}>Input Order Information</Text>
      </View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Order Number:</Text>
      <TextInput
        style={styles.input_field}
        placeholder="Order Number"
        value={orderNumber}
        onChangeText={(text) => setOrderNumber(text)}
      />
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Confirmation PIN:</Text>
      <TextInput
        style={styles.input_field}
        placeholder="Confirmation Pin"
        value={confirmationPin}
        onChangeText={(text) => setConfirmationPin(text)}
      />

      <TouchableOpacity
        onPress={handleSearch}
        style={styles.search_button_container}
      >
        <Text style={styles.search_button_text}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigation}>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
          or{" "}
          <Text style={{ color: "#4E00CE", textDecorationLine: "underline" }}>
            scan order label
          </Text>
        </Text>
      </TouchableOpacity>
    </PageContainer>
  );
};

export default Input_Page;
