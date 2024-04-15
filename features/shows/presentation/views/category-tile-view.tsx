import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useCategoryTilesViewModel } from "../view-models";
import { Button, Card, Headline } from "@/components";
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.showsContainer}
      >
        {categoryShows?.map((show) => {
          return (
            <Card
              title={show.name}
              key={show.name}
              style={{ marginRight: StyleDefaults["space-md"] }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: StyleDefaults["space-md"],
    marginVertical: StyleDefaults["space-lg"],
  },
  categoryButtons: {
    flexDirection: "row",
    marginTop: StyleDefaults["space-sm"],
  },
  showsContainer: {
    marginTop: StyleDefaults["space-sm"],
    overflow: "visible",
  },
});
