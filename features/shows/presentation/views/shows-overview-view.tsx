import { ScrollView, StyleSheet, Text } from "react-native";
import { Colors, StyleDefaults } from "@/configs";
import { Header, Headline, CustomTextInput, Body } from "@/components";
import { PopularView } from "./popular-view";
import { useState } from "react";
import { ShowView } from "./show-view";
import { CategoryTileView } from "./category-tile-view";

export const ShowsOverviewView = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
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
          <CategoryTileView />
          <ShowView />
        </Body>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
  },
  body: {
    borderRadius: StyleDefaults.radius,
    backgroundColor: Colors.background,
  },
});
