import { StyleSheet, Text, View } from "react-native";
import { useCategoryTilesViewModel } from "../view-models";
import { Button, Headline } from "@/components";
import { useMemo, useState } from "react";
import { StyleDefaults } from "@/configs";

export const CategoryTileView = () => {
  const { categoryTiles } = useCategoryTilesViewModel();
  const [activeCategory, setActiveCategory] = useState(categoryTiles[0].name);

  const categoryShows = useMemo(() => {
    return categoryTiles.find((category) => category.name === activeCategory)
      ?.shows;
  }, [activeCategory, categoryTiles]);

  const handleTileClick = (categoryName: (typeof categoryTiles)[0]["name"]) => {
    setActiveCategory(categoryName);
  };

  return (
    <View style={styles.container}>
      <Headline content="Shows entdecken" as="h4" />
      <View style={styles.categoryButtons}>
        {categoryTiles.map((tile) => {
          return (
            <View
              key={tile.name}
              style={{ marginRight: StyleDefaults["space-sm"] }}
            >
              <Button
                title={tile.name}
                onPress={() => handleTileClick(tile.name)}
                variant={tile.name === activeCategory ? "primary" : "ghost"}
              />
            </View>
          );
        })}
      </View>

      {categoryShows?.map((show) => {
        return (
          <View key={show.name}>
            <Text>{show.name}</Text>
          </View>
        );
      })}
      <Text>CategoryTileView</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: StyleDefaults["space-md"],
    marginVertical: StyleDefaults["space-lg"],
  },
  categoryButtons: {
    flexDirection: "row",
    marginTop: StyleDefaults["space-sm"],
  },
});
