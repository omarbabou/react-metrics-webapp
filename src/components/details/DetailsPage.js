import React, { useEffect } from 'react';
import { IoIosPin } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import {
  WiDaySunny,
  WiDayThunderstorm,
  WiDaySnowWind,
  WiDayRain,
  WiCloudy,
  WiDayRainMix,
  WiDayHaze,
  WiDayFog,
  WiSmoke,
  WiTornado,
  WiCloudyGusts,
} from 'react-icons/wi';
import { REMOVE_DATA } from '../../redux/reducer/reducers';
import Loader from './Loader';

const Details = () => {
  const city = useSelector((state) => state.dataReducer.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: REMOVE_DATA,
    });
  }, []);
  const icon = () => {
    switch (city.weather[0].main) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Thunderstorm':
        return <WiDayThunderstorm />;
      case 'Snow':
        return <WiDaySnowWind />;
      case 'Rain':
        return <WiDayRain />;
      case 'Clouds':
        return <WiCloudy />;
      case 'Drizzle':
        return <WiDayRainMix />;
      case 'Mist':
        return <WiDayFog />;
      case 'Smoke':
        return <WiSmoke />;
      case 'Fog':
        return <WiDayFog />;
      case 'Haze':
        return <WiDayHaze />;
      case 'Dust':
        return <WiDayRainMix />;
      case 'Sand':
        return <WiCloudyGusts />;
      case 'Ash':
        return <WiCloudyGusts />;
      case 'Squall':
        return <WiTornado />;
      case 'Tornado':
        return <WiTornado />;
      default:
        return <div className="none" />;
    }
  };

export default Details;
