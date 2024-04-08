import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../configs/colors";
import { Headline } from "../../../../components";

export const ShowsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Headline content="Shows" as="h1" />
        <Text style={{ color: Colors.light, paddingTop: 8 }}>
          Und das hier ist ein kleiner Beschreibungstext, der erstmal nur aus
          visuellen Gruenden verwendet wird.
        </Text>
      </View>
      <Text>Das hier ist der Shows View</Text>
    </View>
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
    marginHorizontal: 8,
    padding: 24,
  },
});
