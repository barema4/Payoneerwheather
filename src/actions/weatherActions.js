export const GET_WEATHER = 'GET_WEATHER'
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE'



export const getWeatherForecasts = () => ({
    type: GET_WEATHER,
  })
  
  export const getWeatherForecastsSuccess = (posts) => ({
    type: GET_WEATHER_SUCCESS,
    payload: posts,
  })
  
  export const getWeatherForecastsFailure = () => ({
    type: GET_WEATHER_FAILURE,
  })

  export function fetchWeatherForecasts() {

    return async (dispatch) => {

      dispatch(getWeatherForecasts())
  
      try {
          
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
        const data = await response.json()
        dispatch(getWeatherForecastsSuccess(data))

      } catch (error) {
        dispatch(getWeatherForecastsFailure())
      }
    }
  }