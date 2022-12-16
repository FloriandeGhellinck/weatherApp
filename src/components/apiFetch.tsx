// import { Dispatch, FC, SetStateAction } from 'react';

// import { APIProps, Coords } from '../types/meteoData';

// export const API_KEY = '1ddbc2b4f348fbfb47f710c84367037c';
// const API_KEY2 = '48bf6c4191cfd4eb52fc073f01ffb318';
// const API_ROAD = 'https://api.openweathermap.org/data/2.5/weather?';

// const GetData: FC<{
//   setMeteoData: Dispatch<SetStateAction<APIProps | undefined>>;
//   setIsLoading: Dispatch<SetStateAction<boolean>>;
//   setError: Dispatch<SetStateAction<string | null>>;
//   coords: Coords | undefined;
// }> = ({ setMeteoData, setIsLoading, setError, coords }) => {
//   const lat = coords?.lat;
//   const lon = coords?.lon;
//   const city = coords?.name;

//   const fetchMeteoHandler = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         `${API_ROAD}lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       );

//       if (!response.ok) {
//         setIsLoading(false);

//         throw new Error('Something went wrong');
//       }

//       const data = await response.json();

//       const dataProcessed: APIProps = {
//         id: data.id,
//         country: city,
//         weather: data.weather[0].main,
//         temp: +(data.main.temp - 273.15).toFixed(2),
//         humidity: data.main.humidity,
//         speed: data.wind.speed,
//       };

//       setMeteoData(dataProcessed);
//       setIsLoading(false);
//     } catch (e: any) {
//       setError(e);
//     }
//   };

//   return (
//     <>
//       <div>
//         <button
//           className='bg-blue-300 py-3 px-5 mt-3 rounded-xl'
//           onClick={fetchMeteoHandler}
//         >
//           GET DATA
//         </button>
//       </div>
//     </>
//   );
// };
// export default GetData;
