import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Colors, StyleDefaults } from "@/configs";
import { LinearGradient } from "expo-linear-gradient";

type HeaderProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Header: React.FC<HeaderProps> = ({ children, style }) => {
  return (
    <LinearGradient
      style={[styles.container, style]}
      colors={[Colors.secondary, Colors.primary]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: 70,
    paddingBottom: 60,
    paddingHorizontal: StyleDefaults["space-md"],
  },
});
