import { useState, useEffect } from "react"

/**
 * document.documentElement.scrollTop
 * distancia que o scroll esta do topo
 *
 * window.innerHeight
 * altura de renderização da tela
 *
 * document.documentElement.offsetHeight
 * altura total da tela
 */

const useScroll = () => {
  const [distanceFromTop, setDistanceFromTop] = useState(0)
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    const scrollListener = () => {
      const doc = document.documentElement

      setDistanceFromTop(prevDistance => {
        const newDelta = doc.scrollTop - prevDistance

        if (newDelta > 0) {
          setDelta(prevDelta => (prevDelta >= 0 ? prevDelta + newDelta : 0))
        } else if (newDelta < 0) {
          setDelta(prevDelta => (prevDelta <= 0 ? prevDelta + newDelta : 0))
        }

        return doc.scrollTop
      })
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return { distanceFromTop, delta }
}

export default useScroll
