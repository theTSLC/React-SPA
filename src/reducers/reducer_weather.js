import { FETCH_WEATHER } from '../actions/index';

// for reducers always have first argument of state we're exporting and second argument as action
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: 
      // making sure to return new instance of state, not mutate state as if with state.push
      // return state.concat([action.payload.data]); ES6 equivalent syntax below
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
  }
  return state;
}