import {
  Text,
  View,
  Box,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  useCameraPermission,
  Camera,
  useCameraDevice,
  requestPermission,
  useCodeScanner,
} from "react-native-vision-camera";

import { styles } from "../styles/styles";

import PageContainer from "../components/PageContainer";

const Scan_Page = () => {
  const { hasPermission, requestPermission } = useCameraPermission();

  if (!hasPermission) {
    requestPermission();
  }

  const device = useCameraDevice("back");
  if (device == null || !hasPermission) return <NoCameraDeviceError />;

  const handleScan = () => {
    // Implement your search logic here
    console.log("Scanning...");
  };

  const handleNavigation = () => {
    // Implement navigation to the scan page here
    console.log("Navigating to input page...");
  };

  const onCodeScanned = (code) => {
    console.log(`Scanned ${code.length} codes:`, code);
  };

  // 5. Initialize the Code Scanner to scan QR codes and Barcodes
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: onCodeScanned,
  });

  return (
    <PageContainer>
      <View  style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 30, padding: 20 }}>
          Scan your item label
        </Text>
      </View>
      <View flex={2} style={{margin: 10,borderRadius: 20}} position="relative">
        <Camera
          style={{flex: 1,padding: 2, borderColor: "#260064", border: 4, borderRadius: 20}}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      </View>
      
      <View flex={1} style={{padding: 10}}>
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
          <Text style={{ color: "#4E00CE", textAlign: "center",textDecorationLine: "underline" }}>
            Input your order number
          </Text>
        </TouchableOpacity>
      </View>
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
