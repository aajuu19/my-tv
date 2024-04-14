import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../configs";
import { Header, Headline, CustomTextInput } from "../../../../components";
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
            style={{ marginTop: 8 }}
            value={searchText}
            onChangeText={setSearchText}
            iconName="search"
          />
        </Header>
        <View style={styles.viewHeader}>
          <Text style={{ color: Colors.light, paddingTop: 8 }}>
            Und das hier ist ein kleiner Beschreibungstext, der erstmal nur aus
            visuellen Gruenden verwendet wird.
          </Text>
        </View>
        <PopularView style={{ marginTop: 20 }} />
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
  viewHeader: {
    borderRadius: 20,
    backgroundColor: Colors.primary,
    marginHorizontal: 16,
    padding: 24,
  },
});
