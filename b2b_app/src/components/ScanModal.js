import { useEffect, useState } from "react";

import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import Modal from "react-native-modal";

import { scanItem, sendRequest } from "../api/scan_api";

const ScanModal = ({ isModalVisible, handleModal, code }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [complaint, setComplaint] = useState("");

  useEffect(() => {
    async function fetchData() {
      scanItem(code, setItem, setLoading);
    }
    if (code !== 0 && isModalVisible) {
      fetchData();
    }
  }, [isModalVisible]);

  const onClose = () => {
    handleModal();
    setLoading(true);
    setItem(null);
  };

  const onSendRequest = async () => {
    console.log("Sending wiht item, ", item);
    sendRequest(
      item.item_name,
      item.refund_amount,
      item.item_description,
      item.return_reasoning,
      onClose
    );
  }

  return (
    <Modal
      flex={1}
      isVisible={isModalVisible}
      style={{
        backgroundColor: "white",
        borderRadius: 35,
        padding: 20,
        position: "absolute",
        marginTop: 50,
        marginLeft: 30,
      }}
    >
      <View style={styles.header_modal}>
        <Text style={styles.header_modal_text}>Is this your item?</Text>
      </View>
      <View flex={2}>
        {!loading && (
          <View
            style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 40 }}
          >
            <Text style={{ fontSize: 22, marginBottom: 10 }}>
              Item Name: {item.item_name}
            </Text>
            <Text style={{ fontSize: 22, marginBottom: 10 }}>
              Company: {item.item_company}
            </Text>
            <Text style={{ fontSize: 22, marginBottom: 10 }}>
              Cost: {item.item_cost}
            </Text>
            <Text style={{ fontSize: 20, marginBottom: 30 }}>
              Description: {item.item_description}
            </Text>

            <TextInput
              style={{
                height: 150,
                padding: 10,
                borderWidth: 1,
                textAlignVertical: "top",
              }}
              onChangeText={setComplaint}
              multiline={true}
            />
            <Text style={{ fontSize: 14, marginBottom: 5 }}>
              If so, input your complaint and send request
            </Text>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity
          onPress={onSendRequest}
          style={styles.confirm_button_container}
        >
          <Text style={styles.modal_button_text}>Send Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClose}
          style={styles.modal_button_container}
        >
          <Text style={styles.modal_button_text}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ScanModal;
