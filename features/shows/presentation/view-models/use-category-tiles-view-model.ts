import { Category } from "../../domain/entities";
import {
  alternativeMockedOverviewShowData,
  mockedOverviewShowData,
} from "../../mock-data";

export const useCategoryTilesViewModel = () => {
  const categoryTiles: Category[] = [
    {
      name: "Dating",
      description: "Funny stuff",
      shows: mockedOverviewShowData,
    },
    {
      name: "Drama",
      description: "Serious stuff",
      shows: alternativeMockedOverviewShowData,
    },
    {
      name: "Casting",
      description: "Laughing stuff",
      shows: mockedOverviewShowData,
    },
    {
      name: "Wettkampf",
      description: "Crazy stuff",
      shows: mockedOverviewShowData,
    },
  ];

  return { isLoading: false, isError: false, categoryTiles };
};
