import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Headline, Card } from "@/components";
import { StyleDefaults } from "@/configs";
import { usePopularShowsViewModel } from "../view-models";

type PopularViewProps = {
  style?: StyleProp<ViewStyle>;
};

export const PopularView: React.FC<PopularViewProps> = ({ style }) => {
  const { popularShows } = usePopularShowsViewModel();

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
        {popularShows.map((show) => {
          return (
            <Card
              key={show.name}
              style={{ marginRight: StyleDefaults["space-md"] }}
              title={show.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: StyleDefaults["space-md"],
  },
});
