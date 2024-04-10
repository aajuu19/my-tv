import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Colors, StyleDefaults } from "../configs";

type CardProps = {
  style?: StyleProp<ViewStyle>;
};

export const Card: React.FC<CardProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    backgroundColor: Colors.light,
    borderRadius: StyleDefaults.radius,
    overflow: "hidden",
  },
});
