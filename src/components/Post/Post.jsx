import React from "react"
import formatTimeToRead from "../../helpers/formatTimeToRead"

import { PostContainer, Header, Title, Small, HeaderSeparator } from "./styles"

const Post = ({ title, formatedDate, date, timeToRead, html }) => (
  <PostContainer>
    <Header>
      <Title>{title}</Title>
      <Small>
        <time dateTime={date} pubdate="true">
          {formatedDate}
        </time>
        <div>{formatTimeToRead(timeToRead)}</div>
      </Small>
    </Header>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </PostContainer>
)

export default Post
