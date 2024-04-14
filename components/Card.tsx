import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Colors, StyleDefaults } from "../configs";
import { Headline } from "./Headline";

type CardProps = {
  style?: StyleProp<ViewStyle>;
  /* imgPath: string; */
  title: string;
};

export const Card: React.FC<CardProps> = ({ style, title }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require(`../assets/header-image.jpg`)}
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
          content={title}
          style={{
            color: Colors.dark,
          }}
        />
      </View>
    </View>
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
