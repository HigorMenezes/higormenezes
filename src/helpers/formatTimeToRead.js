const format = timeToRead => {
  console.log(timeToRead)
  return `${Array(Math.ceil(timeToRead / 6))
    .fill("☕")
    .join("")} ${timeToRead} min`
}

export default format
