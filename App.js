import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
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

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>
        Привет {"\n"}Привет
      </Text>
      <Button
        title="Press me 1"
        color="red"
        onPress={handleButtonPress1}
        style={styles.btn}
      />
      <Button
        title="Press me 2"
        color="green"
        onPress={handleButtonPress2}
        style={styles.btn}
      />
      <Button
        title="Press me 3"
        color="blue"
        onPress={handleButtonPress3}
        style={styles.btn}
      />
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
          width: 300,
          height: 250,
        }}
      />
      <StatusBar style="auto" />
    </View>
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
    // padding: '10px'
  },
  btn: {
    marginTop: 20,
  },
});
