import { csv } from "d3"
import { useEffect, useState } from "react"

const csvUrl = ''

export const useData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  return data
}