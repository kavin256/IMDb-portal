import {MovieData} from './movie-data';
import {MovieRating} from './movie-rating';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */


export class ApiResponse {
  Response: string;
  Error?: string;

  // when retrieved by search
  Search?: MovieData [];
  totalResults?: string;

  // when retrieved by ID
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: MovieRating [];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
}
