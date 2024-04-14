import { mockedOverviewShowData } from "@/features/shows/mock-data";

export const usePopularShowsViewModel = () => {
  /* TODO: Fetching logic here */

  return {
    isLoading: false,
    isError: false,
    popularShows: mockedOverviewShowData,
  };
};
