import styled from "styled-components"
import media from "styled-media-query"

export const AvatarContainer = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  max-width: 3rem;
  max-height: 3rem;
  overflow: hidden;
  border-radius: 50%;
  margin: 0.5rem;

  display: none;

  ${media.greaterThan("small")`
    display: block;
  `}
`
