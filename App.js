import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Prompt from "react-native-prompt-crossplatform";

export default function App() {
  const [promptValue, setPromptValue] = useState("");
  const [visiblePrompt, setVisiblePrompt] = useState(false);
  const [visibleImg, setVisibleImg] = useState(false);

  const handleTextPress = () => {
    console.log("Text pressed!!!");
  };

  const handleButtonPress1 = () => {
    Alert.alert("myAlert", "Привет из окна Alert", [
      { text: "Yes", onPress: () => console.log("You press button [Yes]") },
      {
        text: "Cancel",
        onPress: () => console.log("You press button [Cancel]"),
      },
    ]);
  };

  const handleButtonPress2 = () => {
    setVisiblePrompt(true);
  };

  const handleButtonPress3 = () => {
    setVisibleImg(true);
  };

  const handleImgPress = () => {
    setVisibleImg(false);
  };

  const platformOs = Platform.OS;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>
        React Native app on platform {platformOs}
      </Text>

      <View style={stylesBtn.container}>
        <Button
          title="Alert"
          color="red"
          onPress={handleButtonPress1}
          style={styles.btn}
        />
        <Button
          title="Prompt"
          color="green"
          onPress={handleButtonPress2}
          style={styles.btn}
        />
        <Button
          title="Image"
          color="blue"
          onPress={handleButtonPress3}
          style={styles.btn}
        />
      </View>
      <Prompt
        title="My Prompt"
        placeholder="Enter Some Text"
        isVisible={visiblePrompt}
        defaultValue={promptValue}
        onChangeText={(text) => {
          setPromptValue(text);
        }}
        onCancel={() => {
          setPromptValue("");
          setVisiblePrompt(false);
          console.log("You press button [Cancel]");
        }}
        onSubmit={() => {
          setVisiblePrompt(false);
          console.log("You press button [Submit], value: " + promptValue);
        }}
      />
      {visibleImg && (
        <TouchableWithoutFeedback onPress={handleImgPress}>
          <Image source={require("./assets/Happy-Stitch2.png")} />
        </TouchableWithoutFeedback>
      )}
      <Image
        source={{
          uri: "https://itproger.com/img/courses/1615637098.jpg",
          width: "100%",
          height: 250,
        }}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center'
    paddingTop: 20,
  },
  text: {
    color: "red",
    padding: 10,
  },
  btn: {
    marginTop: 20,
  },
});

const stylesBtn = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: Platform.OS === "android" ? "#ff9" : "#ff0",
  },
});
