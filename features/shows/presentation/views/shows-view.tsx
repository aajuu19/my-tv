import { StyleSheet, Text, View } from "react-native";
import { Colors, StyleDefaults } from "../../../../configs";
import {
  Header,
  Headline,
  CustomTextInput,
  Body,
} from "../../../../components";
import { PopularView } from "./popular-view";
import { useState } from "react";

export const ShowsView = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Header>
          <Headline content="Shows" as="h1" style={{ color: Colors.light }} />
          <CustomTextInput
            style={{ marginTop: StyleDefaults["space-sm"] }}
            value={searchText}
            onChangeText={setSearchText}
            iconName="search"
          />
        </Header>
        <Body style={styles.body}>
          <Text
            style={{
              color: Colors.dark,
              padding: StyleDefaults["space-md"],
            }}
          >
            Und das hier ist ein kleiner Beschreibungstext, der erstmal nur aus
            visuellen Gruenden verwendet wird.
          </Text>
          <PopularView />
        </Body>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "",
  },
  body: {
    borderRadius: StyleDefaults.radius,
    backgroundColor: Colors.background,
  },
});
