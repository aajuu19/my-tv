import { StyleSheet, View, ViewProps } from "react-native";
import { StyleDefaults } from "@/configs";

export const Body: React.FC<ViewProps> = (props) => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    paddingVertical: StyleDefaults["space-md"],
  },
});
