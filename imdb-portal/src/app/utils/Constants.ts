export enum Constants {
  // endpoints
  API_BASE_URL = 'http://www.omdbapi.com',
  API_IMAGE_URL = 'http://img.omdbapi.com',

  // values
  API_KEY_VALUE = '79085be9',
  MAX_MOVIE_RESULTS_COUNT = 4,

  // param names
  API_KEY = 'apikey',
  SEARCH_QUERY = 's',
  MOVIE_ID = 'i',

  // separators
  SEPARATOR_URL = '/',
  SEPARATOR_AMP = '&',
  SEPARATOR_EQUAL = '=',
  SEPARATOR_QUES = '?'
}

export enum Status {
  welcome = 'welcome',
  error = 'error',
  loading = 'loading',
  results = 'results'
}
