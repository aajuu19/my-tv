import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useLatestShowsViewModel } from "../view-models/use-latest-shows-view-model";
import { Headline } from "@/components";
import { StyleDefaults } from "@/configs";
import { formatDate } from "@/utils";

const blurHash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const LatestShowsView = () => {
  const { latestShows } = useLatestShowsViewModel();

  return (
    <View style={styles.container}>
      <Headline content="Zuletzt erschienen" as="h4" />
      {latestShows.map((show) => {
        return (
          <View style={styles.showContainer} key={show.name}>
            <Image
              style={styles.showImage}
              source={show.previewImage}
              placeholder={blurHash}
            />
            <View style={styles.showDetails}>
              <Text>{formatDate(show.prevEpisodeDate)}</Text>
              <Headline key={show.name} content={show.name} as="h5" />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StyleDefaults["space-xl"],
    marginHorizontal: StyleDefaults["space-md"],
  },
  showImage: {
    width: 100,
    minHeight: 100,
    borderRadius: StyleDefaults.radius,
    marginRight: StyleDefaults["space-md"],
  },
  showContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginTop: StyleDefaults["space-md"],
    alignItems: "center",
  },
  showDetails: {
    display: "flex",
    flexDirection: "column",
  },
});
