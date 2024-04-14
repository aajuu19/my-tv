import { Show } from "../../domain/entities";

const mockedShowData: Show = {
  name: "Das hier ist eine Show",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  seasons: 4,
  episodes: 58,
  releaseDate: new Date(),
  nextEpisodeDate: new Date(),
};

export const useShowViewModel = () => {
  return {
    isLoading: false,
    isError: false,
    showDetails: mockedShowData,
  };
};
