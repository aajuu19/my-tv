import { ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { Headline, Card } from "../../../../components";

type PopularViewProps = {
  style?: StyleProp<ViewStyle>;
};

export const PopularView: React.FC<PopularViewProps> = ({ style }) => {
  return (
    <View style={[{ marginHorizontal: 16 }, style]}>
      <Headline content="Beliebte Shows" as="h4" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 8,
        }}
      >
        <Card style={{ marginRight: 16 }} />
        <Card style={{ marginRight: 16 }} />
        <Card style={{ marginRight: 16 }} />
      </ScrollView>
    </View>
  );
};
