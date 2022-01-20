import { useState } from "react";
import styled from "styled-components";

const PostStyles = styled.div`
  height: 350px;
  height: 350px;
  width: 300px;
  display: grid;
  grid-template-rows: max-content 1fr;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  h1,
  p {
    text-align: left;
  }
`;

function Post({ post }) {
  return (
    <PostStyles>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </PostStyles>
  );
}

export default Post;
