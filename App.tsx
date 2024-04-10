import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ShowsView } from "./features/shows/presentation/views";
import { Colors } from "./configs/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ShowsView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
