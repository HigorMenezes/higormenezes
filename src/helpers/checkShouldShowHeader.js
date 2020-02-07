const checkShouldShowHeader = ({ delta, distanceFromTop }) => {
  if (distanceFromTop < 100) {
    if (delta >= 50) {
      return false
    }
    return true
  } else {
    if (delta <= -50) {
      return true
    }
    return false
  }
}

export default checkShouldShowHeader
