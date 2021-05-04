import * as actions from "../actions/weatherActions";
export const initialState = {
  weather: [],
  loading: false,
  hasErrors: false,
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_WEATHER:
      return { ...state, loading: true };

    case actions.GET_WEATHER_SUCCESS:
      return { weather: action.payload, loading: false, hasErrors: false };

    case actions.GET_WEATHER_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    default:
      return state;
  }
}
