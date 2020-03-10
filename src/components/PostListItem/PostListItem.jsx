import React from "react";
import PropTypes from "prop-types";
import formatTimeToRead from "../../helpers/formatTimeToRead";

import {
  PostListItemContainer,
  Article,
  Header,
  Title,
  Spoiler,
  Small,
} from "./styles";

const PostListItem = ({
  slug,
  title,
  spoiler,
  formatedDate,
  date,
  timeToRead,
}) => (
  <PostListItemContainer to={slug} aria-label={title}>
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
);

PostListItem.defaultProps = {
  slug: "/",
  title: "",
  spoiler: "",
  formatedDate: "",
  date: "",
  timeToRead: 0,
};

PostListItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  spoiler: PropTypes.string,
  formatedDate: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
};

export default PostListItem;
