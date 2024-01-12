import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        if (!res.ok) {
          setErr("Fail to fetch ")
        }
        const result = await res.json()
        setData(result.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErr("There are something wrong")
      }
    }
    fetchData()
  }, [url])
  return {
    data,
    loading,
    err,
  }
}
export default useFetch
