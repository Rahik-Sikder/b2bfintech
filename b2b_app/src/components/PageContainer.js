import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import { styles } from "../styles/styles";

import mainBackground from "../assets/main_background.png";

const PageContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.page_container_dark}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={mainBackground}
        style={{ position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height, resizeMode: "cover", paddingHorizontal: 50, paddingVertical: 150, justifyContent: "center",  }}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PageContainer;
