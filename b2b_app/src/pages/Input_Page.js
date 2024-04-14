import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "../styles/styles";

import PageContainer from "../components/PageContainer";

const Input_Page = ({ navigation }) => {
  return (
    <PageContainer>
      <SearchForm navigation={navigation} />
    </PageContainer>
  );
};

const SearchForm = ({ navigation }) => {
  const [orderNumber, setOrderNumber] = useState("");
  const [confirmationPin, setConfirmationPin] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  const handleScan = () => {
    // Implement navigation to the scan page here
    console.log("Navigating to scan page...");
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, marginBottom: 25, padding: 20 }}>
        Input Order Information
      </Text>
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

      <TouchableOpacity onPress={handleScan}>
        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
          or{" "}
          <Text style={{ color: "#4E00CE", textDecorationLine: "underline" }}>
            scan order label
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input_Page;
