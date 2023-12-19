import { Box } from '@mui/material';
import React from 'react';

const NoData = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh",alignItems:"center",flexDirection:"column" }}>
      <h1>404 - No Data Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </Box>
  );
};

export default NoData;
