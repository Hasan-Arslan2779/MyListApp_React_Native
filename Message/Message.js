import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Message = (props) => {
  const { name, avatar, news, message, online } = props;
  return (
    <View
      style={{
        height: 80,
        width: "100%",
        flexDirection: "row",
        margin: 2,
        padding: 2,
        borderBottomColor: "#E0E0E0",
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: "#4732B1",
          }}
          source={{ uri: avatar }}
        />
        {online && (
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#1ECB83",
              position: "absolute",
              borderRadius: 5,
              bottom: 12,
              right: 5,
            }}
          ></View>
        )}
      </View>
      <View style={{ flex: 3, justifyContent: "center", paddingLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>{message}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {news > 0 && (
          <View
            style={{
              backgroundColor: "darkgreen",
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              {news}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
