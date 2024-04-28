import { useState, React } from "react";

import { Text, View, TouchableOpacity } from "react-native";

import {
  useCameraPermission,
  Camera,
  useCameraDevice,
  requestPermission,
  useCodeScanner,
} from "react-native-vision-camera";

import { styles } from "../styles/styles";

import PageContainer from "../components/PageContainer";
import ScanModal from "../components/ScanModal";

const Scan_Page = ({ navigation }) => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [code, setCode] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!hasPermission) {
    requestPermission();
  }
  const handleModal = () => {
    if(isModalVisible){
      setCode(0);
    }
    setIsModalVisible(() => !isModalVisible);
  };

  const device = useCameraDevice("back");
  if (device == null || !hasPermission) return <NoCameraDeviceError />;

  const handleScan = () => {
    // Implement your search logic here
    console.log("Scanning code: ", code);
    if (code !== 0) {
      handleModal();
    }
  };

  const handleNavigation = () => {
    // Implement navigation to the scan page here
    console.log("Navigating to input page...");
    navigation.navigate("Input_Page");
  };

  // 5. Initialize the Code Scanner to scan QR codes and Barcodes
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13", "upc-a"],
    onCodeScanned: (codes) => {
      setCode(codes[0].value);
    },
  });

  return (
    <PageContainer>
      <View style={{}}>
        <Text style={{ fontSize: 30, padding: 20 }}>Scan your item label</Text>
      </View>
      <View
        flex={2}
        style={{
          borderRadius: 20,
          backgroundColor: "#260064",
          padding: 5,
          borderRadius: 20,
        }}
        position="relative"
      >
        <Camera
          style={{
            flex: 1,
            margin: 10,
          }}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </View>

      <View flex={1} style={{ padding: 10 }}>
        <TouchableOpacity
          onPress={handleScan}
          style={styles.search_button_container}
        >
          <Text style={styles.search_button_text}>Scan</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, textAlign: "center", fontSize: 20 }}>
          No label?
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text
            style={{
              color: "#4E00CE",
              textAlign: "center",
              textDecorationLine: "underline",
            }}
          >
            Input your order number
          </Text>
        </TouchableOpacity>
      </View>
      <ScanModal
        isModalVisible={isModalVisible}
        handleModal={handleModal}
        code={code}
      />
    </PageContainer>
  );
};

const NoCameraDeviceError = () => {
  return (
    <PageContainer>
      <View>
        <Text style={{ fontSize: 30, marginBottom: 25, padding: 20 }}>
          Sorry, no camera found. Go to app settings and enable camera
          permissions.
        </Text>
        <TouchableOpacity
          onPress={handleScan}
          style={styles.search_button_container}
        >
          <Text style={styles.search_button_text}>Scan</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, textAlign: "center", fontSize: 20 }}>
          No label?
        </Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={{ color: "#4E00CE", textDecorationLine: "underline" }}>
            Input your order number
          </Text>
        </TouchableOpacity>
      </View>
    </PageContainer>
  );
};

export default Scan_Page;
