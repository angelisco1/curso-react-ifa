import { useEffect, useState } from "react"
import Spinner from "../Spinner"

export const withSpinner = (WrappedComponent, url) => {
  return (props) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch(url)
        .then(resp => resp.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    return (
      <div>
        {loading ? <Spinner /> : <WrappedComponent datos={data} />}
      </div>
    )
  }
}