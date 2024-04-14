import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { Colors, StyleDefaults } from "../configs";
import { Headline } from "./Headline";

type CardProps = {
  style?: StyleProp<ViewStyle>;
  /* imgTitle: string; */
  title: string;
};

export const Card: React.FC<CardProps> = ({ style, title }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require(`../assets/header-image.jpg`)}
        style={{ width: "100%", height: 100 }}
      />
      <View style={{ paddingVertical: 16, paddingHorizontal: 12 }}>
        <Headline
          as="h4"
          content={title}
          style={{
            color: Colors.dark,
          }}
        />
        <Text>Card</Text>
      </View>
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
    shadowColor: Colors.border,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
