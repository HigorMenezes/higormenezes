import React from "react";
import PropTypes from "prop-types";
import formatTimeToRead from "../../helpers/formatTimeToRead";

import { PostContainer, Header, Title, Small } from "./styles";

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
);

Post.defaultProps = {
  title: "",
  formatedDate: "",
  date: "",
  timeToRead: 0,
  html: "",
};

Post.propTypes = {
  title: PropTypes.string,
  formatedDate: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  html: PropTypes.string,
};

export default Post;
