import { Show } from "./domain/entities";

export const mockedShowData: Show = {
  name: "Das hier ist eine Show",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  seasons: 4,
  episodes: 58,
  releaseDate: new Date(),
  nextEpisodeDate: new Date(),
  prevEpisodeDate: new Date(),
  categories: ["Drama", "Wettkampf"],
};

export const mockedOverviewShowData: Show[] = [
  { ...mockedShowData, name: "Eine andere Show" },
  { ...mockedShowData, name: "Ganz besondere Show der Extraklasse" },
  { ...mockedShowData, name: "Sehr spannende und abenteurreiche Show" },
];

export const alternativeMockedOverviewShowData: Show[] = [
  { ...mockedShowData, name: "Ganz besondere show" },
  { ...mockedShowData, name: "Shows koennen viele Namen haben" },
  { ...mockedShowData, name: "Jede Show ist anders" },
];
