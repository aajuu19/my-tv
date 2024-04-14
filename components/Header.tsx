import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Colors, StyleDefaults } from "@/configs";

type HeaderProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Header: React.FC<HeaderProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: 70,
    paddingBottom: 60,
    paddingHorizontal: StyleDefaults["space-md"],
  },
});
