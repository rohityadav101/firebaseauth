import { Box, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const token = sessionStorage.getItem('authToken'); 
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!token) {
        navigate("/");
      }
    }, [token, navigate]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPostData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <Container>
        <Box sx={{ height: "200px", width: "200px" }}>
          <img src={`https://robohash.org/${id}`} width="100%" alt="" />
        </Box>
        <h2>Details for Post ID {id}</h2>
        {postData ? (
          <div>
            <h3>{postData.title}</h3>
            <p>{postData.body}</p>
            {/* Render other details */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
};

export default DetailPage;
