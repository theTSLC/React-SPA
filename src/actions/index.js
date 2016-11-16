import axios from 'axios';

const API_KEY = 'c5b4b6f9569a2e326f6c110bcede574a';
//using ES6 template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//useful to keep our action types similiar between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

	return {
      type: FETCH_WEATHER,
      //payload are optional property that goes along with actions that contains additional data that describes this particular action
      //returning the request, the promise, on the payload here
      payload: request
		};
}