import { latestShowsMockData } from "@/features/shows/mock-data";

export const useLatestShowsViewModel = () => {
  /* TODO: Fetching logic here */

  return {
    isLoading: false,
    isError: false,
    latestShows: latestShowsMockData,
  };
};
