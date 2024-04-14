import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ShowsOverviewView } from "./features/shows/presentation/views";
import { Colors } from "./configs/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ShowsOverviewView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
