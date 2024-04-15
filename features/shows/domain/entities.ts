export type Category = {
  /** name of the category */
  name: "Dating" | "Drama" | "Wettkampf" | "Casting";
  /** description of the category */
  description: string;
  /** shows in this category */
  shows?: Show[];
};

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
  /** release date of the last episode, if not stared yet it will be null */
  prevEpisodeDate: Date | null;
  /** description of the show */
  description: string;
  /** related shows */
  relatedShows?: Show[];
  /** categories the show is in */
  categories: Category["name"][];
};
