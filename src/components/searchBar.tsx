import { Dispatch, FC, SetStateAction, useState } from 'react';
import { APIProps, Coords } from '../types/meteoData';

const API_KEY = '1ddbc2b4f348fbfb47f710c84367037c';
const API_ROAD = 'https://api.openweathermap.org/data/2.5/weather?';

const SearchBar: FC<{
  // setCoords: Dispatch<SetStateAction<Coords | undefined>>;
  setError: Dispatch<SetStateAction<string | null>>;
  setMeteoData: Dispatch<SetStateAction<APIProps | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}> = ({ /*setCoords,*/ setError, setMeteoData, setIsLoading }) => {
  const [message, setMessage] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const getMeteo = async (messageInput: string) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${messageInput}&appid=${API_KEY}`
      );
      // console.log(response);
      if (!response.ok) {
        throw new Error('City not known');
      }
      const data: Coords = await response.json();

      console.log(data);
      const lat = data[0].lat;
      const lon = data[0].lon;
      const city = data[0].name;
      // const coords = {
      //   name: data[0].name,
      //   lat: data[0].lat,
      //   lon: data[0].lon,
      // };
      // setCoords(coords);

      const responseAfterCity = await fetch(
        `${API_ROAD}lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!responseAfterCity.ok) {
        setIsLoading(false);

        throw new Error('Something went wrong');
      }
      const dataNext = await responseAfterCity.json();

      const dataProcessed: APIProps = {
        id: dataNext.id,
        country: city,
        weather: dataNext.weather[0].main,
        temp: +(dataNext.main.temp - 273.15).toFixed(2),
        humidity: dataNext.main.humidity,
        speed: dataNext.wind.speed,
      };

      setMeteoData(dataProcessed);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleClick = () => {
    if (!message) {
      return;
    }
    getMeteo(message);
    // setMessage('');
  };

  return (
    <div className='pt-5 w-9/12'>
      <div className='mb-3 xl:w-96'>
        <div className='input-group relative flex flex-wrap items-stretch w-full mb-4 gap-2'>
          <input
            type='search'
            className='form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Search City'
            aria-label='Search'
            aria-describedby='button-addon2'
            value={message}
            onChange={handleOnChange}
          />
          <button
            className='px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out flex items-center '
            type='button'
            id='button-addon2'
            onClick={handleClick}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='search'
              className='w-4'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
