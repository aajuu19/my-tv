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
          marginTop: 10,
        }}
      >
        <Card
          style={{ marginRight: 16 }}
          title="Das ist der Titel einer Show"
        />
        <Card
          style={{ marginRight: 16 }}
          title="Das ist der Titel einer Show"
        />
        <Card title="Das ist der Titel einer Show" />
      </ScrollView>
    </View>
  );
};
