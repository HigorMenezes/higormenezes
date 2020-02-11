import React from "react"
import { Link } from "gatsby"
import formatTimeToRead from "../../helpers/formatTimeToRead"

import {
  PostListItemContainer,
  Article,
  Header,
  Title,
  Spoiler,
  Small,
  Time,
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
        <time datetime={date} pubdate>
          {formatedDate}
        </time>
        <div>{formatTimeToRead(timeToRead)}</div>
      </Small>
    </Article>
  </PostListItemContainer>
)

export default PostListItem
