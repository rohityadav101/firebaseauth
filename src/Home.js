import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "./CustomCard";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const token = sessionStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Container>
        <Box sx={{ padding: "50px 0px" }}>
          <Grid container spacing={3}>
            {currentPosts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={3}>
                <CustomCard
                  id={post.id}
                  title={post.title}
                  description={post.body}
                />
              </Grid>
            ))}
          </Grid>
          {/* MUI Pagination */}
          <Box mt={3} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(posts.length / postsPerPage)}
              page={currentPage}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
