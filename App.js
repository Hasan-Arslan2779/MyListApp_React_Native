import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Message from "./Message/Message";
import MessageList from "./MessageList/MessageList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MessageList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
