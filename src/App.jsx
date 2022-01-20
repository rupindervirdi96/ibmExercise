import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Post from "./Components/post";
// import LinearProgress from "@mui/material/LinearProgress";
// import { CircularProgress } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const AppStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PostsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(async () => {
    let query = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(query.data);
    setIsLoading(false);
  }, []);

  return (
    <AppStyles>
      {isLoading ? <LinearProgress /> : null}
      <h1>Posts</h1>
      {!isLoading ? (
        <PostsStyles>
          {posts.map((post, key) => (
            <Post key={key} post={post} />
          ))}
        </PostsStyles>
      ) : null}
    </AppStyles>
  );
};

export default App;
