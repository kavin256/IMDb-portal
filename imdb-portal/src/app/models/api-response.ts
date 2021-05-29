import {MovieData} from './movie-data';

export class ApiResponse {
  Response: string;
  Search?: MovieData [];
  totalResults?: string;
  Error?: string;
}
