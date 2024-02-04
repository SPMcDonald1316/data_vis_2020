import { csv } from 'd3';

const csvURL = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

export const getData = async () => {
  const data = await csv(csvURL);

  console.log(data[0]);

  return data;
};