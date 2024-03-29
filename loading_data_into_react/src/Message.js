import { csvFormat } from "d3";

export const message = data => {
  let message = '';
  message += `${Math.round(csvFormat(data).length / 1024)} kB\n`;
  console.log('hello');
  message += `${data.length} rows\n`;
  message += `${data.columns.length} columns\n`;
  return message;
}
