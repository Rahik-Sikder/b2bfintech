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
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={mainBackground}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PageContainer;
