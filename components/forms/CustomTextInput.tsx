import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { Colors, StyleDefaults } from "../../configs";
import Ionicons from "@expo/vector-icons/Ionicons";

type CustomTextInputProps = {
  style?: StyleProp<TextStyle>;
  iconName?: keyof typeof Ionicons.glyphMap;
} & TextInputProps;

export const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.iconName && (
        <Ionicons
          name={props.iconName}
          size={16}
          color={Colors.dark}
          style={styles.icon}
        />
      )}

      <TextInput {...props} style={[styles.input, props.style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    width: 16,
    height: 16,
    zIndex: 10,
    top: "50%",
    left: 12,
    transform: [{ translateY: -4 }],
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.light,
    borderRadius: StyleDefaults.radius,
    paddingVertical: 8,
    paddingLeft: 32,
    paddingRight: 16,
  },
});
