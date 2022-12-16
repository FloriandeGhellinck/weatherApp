import { Dispatch, FC, SetStateAction } from 'react';
import { APIProps } from '../types/meteoData';

const Card: FC<{
  meteoData: APIProps;
}> = ({ meteoData }) => {
  console.log(meteoData);
  return (
    <div className='flex rounded-lg border border-black h-fit w-11/12 md:w-8/12 font-poppins'>
      <div className='flex flex-col w-1/2 justify-between p-1'>
        <div>Country: {meteoData.country}</div>
        <div>Weather: {meteoData.weather}</div>
      </div>
      <div className='flex flex-col w-1/2 justify-between'>
        <div>Temp.: {meteoData.temp} °C</div>
        <div>Humidity: {meteoData.humidity} %</div>
        <div>Wind: {meteoData.speed} km/h</div>
      </div>
    </div>
  );
};

export default Card;
