import { Text, View, Pressable, SafeAreaView, StatusBar } from "react-native";

import { Svg, Path } from "react-native-svg";

import { styles } from "../styles/styles";

const PageContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.page_container_dark}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.page_container}>
        <TopSvg />
        <View style={{position: "absolute", marginTop: 200}}>{children}</View>
        <BottomSvg />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const TopSvg = () => {
  return (
    <View style={styles.viewContainer}>
      <Svg
        viewBox="0 30 390 279"
        width="500"
        height="300"
        style={{ position: "absolute" }}
      >
        <Path
          d="M-22.5724 292C-21.3831 512.446 -25.1689 77.467 -23.1502 8.86923C-22.9849 3.25215 -19.0402 0 -13.4207 0H386C394.284 0 401 6.71573 401 15V121.669C401 131.142 392.336 138.328 382.985 136.817C302.08 123.74 -23.6947 83.9846 -22.5724 292Z"
          fill="#BC95FB"
        />
      </Svg>
      <Svg viewBox="0 40 390 279" width="500" height="300">
        <Path
          d="M-22.4449 146C-345.193 375.247 -73.0507 61.522 -28.3751 7.54727C-24.5555 2.93267 -18.5643 0 -12.574 0H425.143C432.967 0 439.477 6.01371 440.096 13.8132L459.564 259.103C460.996 277.156 421.453 286.793 412.729 270.923C341.062 140.562 201.057 -12.7531 -22.4449 146Z"
          fill="#260064"
        />
      </Svg>
    </View>
  );
};

const BottomSvg = () => {
  return (
    <View style={styles.viewContainer}>
      <Svg
        viewBox="60 0 390 500"
        width="450"
        height="403"
        style={{ bottom: -40 }}
      >
        <Path
          d="M1.6449 73.5038C3.32917 -229.605 -2.15781 497.023 0.998771 585.38C1.19707 590.931 5.11806 594 10.6723 594H576C584.284 594 591 587.284 591 579V419.624C591 411.444 584.461 404.735 576.289 404.359C485.019 400.158 0.0298153 364.161 1.6449 73.5038Z"
          fill="#BC95FB"
        />
      </Svg>
      <Svg viewBox="0 30 444.755 259.792" width="500" height="293"
        style={{ position: "absolute", bottom: -70 }}
        >
        <Path
          d="M1.18207 74C2.36058 -144.445 -1.34602 190.841 0.550809 250.906C0.728181 256.523 4.71434 259.792 10.3338 259.792H409.755C418.039 259.792 424.755 253.077 424.755 244.792V143.029C424.755 132.137 413.648 124.67 403.563 128.781C317.67 163.791 0.0739816 279.392 1.18207 74Z"
          fill="#260064"
        />
      </Svg>
    </View>
  );
};

export default PageContainer;
