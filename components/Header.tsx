import { StyleSheet, View } from "react-native";
import { Colors } from "../configs";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: 70,
    paddingBottom: 60,
    paddingHorizontal: 16,
  },
});
