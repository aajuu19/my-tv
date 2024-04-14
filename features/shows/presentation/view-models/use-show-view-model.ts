import { mockedShowData } from "@/features/shows/mock-data";

export const useShowViewModel = () => {
  /* TODO: Fetching logic here */

  return {
    isLoading: false,
    isError: false,
    showDetails: mockedShowData,
  };
};
