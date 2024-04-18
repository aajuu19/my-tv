import { ScrollView, StyleSheet, Text } from "react-native";
import { Colors, StyleDefaults } from "@/configs";
import { Header, Headline, CustomTextInput, Body } from "@/components";
import { createContext, useState } from "react";
import { LatestShowsView, PopularView, ShowView, CategoryTileView } from "./";
import { Show } from "../../domain/entities";

type ShowContextValueProps = {
  show: Show | null;
  setShow: (show: Show) => void;
};

export const ShowContext = createContext<ShowContextValueProps>({
  show: null,
  setShow: () => {},
});

export const ShowsOverviewView = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState<Show | null>(null);

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
          <ShowContext.Provider value={{ show: show, setShow: setShow }}>
            <PopularView />
            <LatestShowsView />
            <CategoryTileView />
            <ShowView />
          </ShowContext.Provider>
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
