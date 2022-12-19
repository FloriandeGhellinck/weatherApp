import { FC, useState } from 'react';
import { HeartSVG } from '../assets/svg/heart';
import { APIProps } from '../types/meteoData';
import BoxComponent from './box';

const Card: FC<{
  city: APIProps;
  allCities: APIProps[];
  setAllCities: (cities: APIProps[]) => void;
}> = ({ city, allCities, setAllCities }) => {
  const registeredCity = allCities.find((c) => c.id === city.id);
  const [cityRegistered, setCityRegistered] = useState<boolean>(
    Boolean(registeredCity)
  );

  const handleCityRegistered = () => {
    if (cityRegistered) {
      setCityRegistered(false);
      setAllCities(allCities.filter((c: APIProps) => c !== city));
    }
    if (!cityRegistered) {
      // setCityRegistered(true);
      setAllCities([...allCities, city]);
    }
  };

  return (
    <BoxComponent>
      <div className='flex flex-col w-1/2 justify-between p-1'>
        <p>
          <span className='font-bold'> City:</span> {city.country}
        </p>
        <p>
          {' '}
          <span className='font-bold'>Weather: </span>
          {city.weather}
        </p>
      </div>
      <div className='flex w-1/2 items-center'>
        <div className='w-11/12 flex flex-col justify-between'>
          <p>
            {' '}
            <span className='font-bold'>Temp.: </span>
            {city.temp} °C
          </p>
          <p>
            {' '}
            <span className='font-bold'>Humidity:</span> {city.humidity} %
          </p>
          <p>
            {' '}
            <span className='font-bold'>Wind: </span>
            {city.speed} km/h
          </p>
        </div>
        <div className='w-1/12'>
          <button className='w-full h-full' onClick={handleCityRegistered}>
            {!cityRegistered ? <HeartSVG /> : <HeartSVG fill='red' />}
          </button>
        </div>
      </div>
    </BoxComponent>
  );
};

export default Card;
