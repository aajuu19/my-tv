import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Colors, StyleDefaults } from "@/configs";
import { Headline } from "./Headline";

type CardProps = {
  style?: StyleProp<ViewStyle>;
  imgPath?: string;
  title: string;
} & TouchableOpacityProps;

export const Card: React.FC<CardProps> = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Image
        source={require("../assets/header-image.jpg")}
        style={{
          width: "100%",
          height: 100,
          borderTopLeftRadius: StyleDefaults.radius,
          borderTopRightRadius: StyleDefaults.radius,
        }}
      />
      <View
        style={{
          paddingVertical: StyleDefaults["space-md"],
          paddingHorizontal: StyleDefaults["space-sm"],
        }}
      >
        <Headline
          as="h4"
          content={props.title}
          style={{
            color: Colors.dark,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    borderRadius: StyleDefaults.radius,
    backgroundColor: Colors.light,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
});
