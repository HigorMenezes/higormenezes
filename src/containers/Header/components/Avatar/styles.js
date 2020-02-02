import styled from "styled-components"
import Img from "gatsby-image"

export const AvatarContainer = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  max-width: 3rem;
  max-height: 3rem;
  overflow: hidden;
  border-radius: 50%;
  margin: 0.5rem;
`

export const Image = styled(Img)`
  max-width: 100%;
  max-height: 100%;
  background-position: center;
`
