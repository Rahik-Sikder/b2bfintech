import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/styles";

import mainBackground from "../assets/main_background.png";

const PageContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.page_container_dark}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={mainBackground}
        style={{ flex: 1, resizeMode: "cover", paddingHorizontal: 50, paddingVertical: 150, justifyContent: "center" }}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PageContainer;
