import { csv } from "d3"
import { useEffect, useState } from "react"

const csvUrl = 'https://gist.githubusercontent.com/whoinlee/f8d0453cb140da2d1b1d474fe1fa3cd6/raw/15a19e4c75a018750c798e1d37058f8920d75d80/week_temperature_sf.csv'

export const useData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);
      return d;
    }
    csv(csvUrl, row).then(setData)
  }, [])

  return data
}