const FETCH_DATA = 'FETCH_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export const IState = {
  details: {},
};

export const getWeather = (payload) => ({ type: FETCH_DATA, payload });

export const getData = (city) => async (dispatch) => {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city},cd&appid=767523ff2f7a10f9791518f68ff5f7e1`;
  const response = await fetch(API);
  const getApiData = await response.json();
  const Coordinate = getApiData.weather[0];
  Coordinate.temp = getApiData.main.temp;
  Coordinate.humidity = getApiData.main.humidity;
  Coordinate.pressure = getApiData.main.pressure;
  Coordinate.speed = getApiData.wind.speed;
  Coordinate.deg = getApiData.wind.deg;
  Coordinate.name = getApiData.name;

  dispatch(getWeather(getApiData));
};

const reducer = (state = IState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, details: action.payload };
    case REMOVE_DATA:
      return { ...state, details: {} };
    default:
      return state;
  }
};
export default reducer;
