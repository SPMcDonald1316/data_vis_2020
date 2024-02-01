import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/9938078a93a4ba380a0e/raw/8c489c0c1855c00f702f27c7546037e2941ae549/auto-mpg.csv'

export const getData = async () => {
  const data = await csv(csvUrl);

  // Have a look at the attributes available in the console
  console.log(data[0]);

  return data;
}