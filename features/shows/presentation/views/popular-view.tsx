import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Headline, Card } from "../../../../components";
import { StyleDefaults } from "../../../../configs";

type PopularViewProps = {
  style?: StyleProp<ViewStyle>;
};

export const PopularView: React.FC<PopularViewProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Headline content="Derzeit beliebt" as="h4" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: StyleDefaults["space-sm"],
          overflow: "visible",
        }}
      >
        <Card
          style={{ marginRight: StyleDefaults["space-md"] }}
          title="Das ist der Titel einer Show"
        />
        <Card
          style={{ marginRight: StyleDefaults["space-md"] }}
          title="Das ist der Titel einer Show"
        />
        <Card
          style={{ marginRight: StyleDefaults["space-md"] }}
          title="Das ist der Titel einer Show"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: StyleDefaults["space-md"],
  },
});
