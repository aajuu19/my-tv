import { StyleSheet, View, ViewProps } from "react-native";

export const Body: React.FC<ViewProps> = (props) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
  },
});
