export type Show = {
  /** name of the show */
  name: string;
  /** release date of the show */
  releaseDate: Date;
  /** total amount of seasons */
  seasons: number;
  /** total amount of episodes */
  episodes: number;
  /** date of the next episode, if already finished or unknown it resolves to false */
  nextEpisodeDate: Date | false;
  /** description of the show */
  description: string;
  /** related shows */
  relatedShows?: Show[];
};
