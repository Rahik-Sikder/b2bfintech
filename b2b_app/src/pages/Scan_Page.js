import {
  Text,
  View,
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
} from "react-native-vision-camera";

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

  return (
    <PageContainer>
      <View>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        <Text style={{ fontSize: 30, marginBottom: 25, padding: 20 }}>
          Scan your item label
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
