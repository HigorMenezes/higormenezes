import React from "react"
import formatTimeToRead from "../../helpers/formatTimeToRead"

import {
  PostListItemContainer,
  Article,
  Header,
  Title,
  Spoiler,
  Small,
} from "./styles"

const PostListItem = ({
  slug,
  title,
  spoiler,
  formatedDate,
  date,
  timeToRead,
}) => (
  <PostListItemContainer to={slug}>
    <Article>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Spoiler>{spoiler}</Spoiler>
      <Small>
        <time dateTime={date} pubdate="true">
          {formatedDate}
        </time>
        <div>{formatTimeToRead(timeToRead)}</div>
      </Small>
    </Article>
  </PostListItemContainer>
)

export default PostListItem
