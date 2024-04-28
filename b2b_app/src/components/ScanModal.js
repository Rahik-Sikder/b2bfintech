import { useEffect, useState } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import Modal from "react-native-modal";

import { scanItem } from "../api/scan_item";

const ScanModal = ({ isModalVisible, handleModal, code }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      scanItem(code, setItem).then(() => {
        setLoading(false);
        console.log("This is the item", item);
      });
    }
    if (code !== 0 && isModalVisible) {
      fetchData();
    }
  }, [isModalVisible]);

  return (
    <Modal
      isVisible={isModalVisible}
      style={{ backgroundColor: "white", borderRadius: 35, padding: 20 }}
    >
      <View style={styles.header_modal}>
        <Text style={styles.header_modal_text}>Is this your item?</Text>
      </View>
      <View flex={1}></View>
      <View>
        <TouchableOpacity
          onPress={handleModal}
          style={styles.confirm_button_container}
        >
          <Text style={styles.modal_button_text}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleModal}
          style={styles.modal_button_container}
        >
          <Text style={styles.modal_button_text}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ScanModal;
