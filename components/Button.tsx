import {
  Button as ReactNativeButton,
  ButtonProps,
  StyleSheet,
} from "react-native";

export const Button = ({ title }: ButtonProps) => {
  return <ReactNativeButton style={styles.button} title={title} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
});
