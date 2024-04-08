import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../../configs/colors";

export const ShowsView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={{ color: Colors.light }}>Das ist ein overlay text</Text>
      </View>
      <Text>Das hier ist der Shows View</Text>
    </View>
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
    backgroundColor: Colors.tertiary,
  },
});
