import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const truncateText = (text, limit) => {
  if (text.split(' ').length > limit) {
    return `${text.split(' ').slice(0, limit).join(' ')} ...`;
  }
  return text;
};

const CustomCard = ({ id, title, description }) => {
  const truncatedTitle = truncateText(title, 3);
  const truncatedDescription = truncateText(description, 20);



  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={`https://robohash.org/${id}`} 
        alt={title} 
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {truncatedTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
        </Typography>
        <Button variant="outlined" component={Link} to={`/details/${id}`} sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
