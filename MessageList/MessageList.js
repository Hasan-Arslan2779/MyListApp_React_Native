import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { faker } from "@faker-js/faker";
import Message from "../Message/Message";
const Data = Array(25)
  .fill(null)
  .map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    name: faker.person.firstName(),
    message: faker.lorem.sentence(),
    news: faker.number.int() % 5,
    online: faker.datatype.boolean(),
  }));

const MessageList = () => {
  return (
    <View style={{ width: "90%" }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Message
            name={item.name}
            avatar={item.avatar}
            message={item.message}
            news={item.news}
            online={item.online}
          />
        )}
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({});
