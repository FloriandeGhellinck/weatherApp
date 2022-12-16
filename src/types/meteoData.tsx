export type APIProps = {
  id: number;
  country: string | undefined;
  weather: string;
  temp: number;
  humidity: number;
  speed: number;
};

export type Coords = [
  {
    lat: number;
    lon: number;
    name: string;
  }
];
