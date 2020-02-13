import { useState, useEffect, useRef } from "react"

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

const checkShouldHideHeader = ({ delta, distanceFromTop }) => {
  if (distanceFromTop < 100) {
    if (delta >= 25) {
      return true
    }
    return false
  } else {
    if (delta <= -25) {
      return false
    }
    return true
  }
}

const useScroll = () => {
  const distanceFromTop = useRef(0)
  const delta = useRef(0)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      const doc = document.documentElement

      const newDelta = doc.scrollTop - distanceFromTop.current

      if (newDelta > 0) {
        delta.current = delta.current >= 0 ? delta.current + newDelta : 0
      } else if (newDelta < 0) {
        delta.current = delta.current <= 0 ? delta.current + newDelta : 0
      }

      distanceFromTop.current = doc.scrollTop

      setHide(
        checkShouldHideHeader({
          delta: delta.current,
          distanceFromTop: distanceFromTop.current,
        })
      )
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return { hide }
}

export default useScroll
