import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../configs";
import { Headline } from "../../../../components";
import { PopularView } from "./popular-view";

export const ShowsView = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Headline content="Shows" as="h1" />
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
    marginTop: 60,
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "",
  },
  viewHeader: {
    borderRadius: 20,
    backgroundColor: Colors.tertiary,
    marginHorizontal: 16,
    padding: 24,
  },
});
