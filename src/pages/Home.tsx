import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Smart Seat Allocation',
      description: 'Automated seat allocation based on passenger preferences and journey duration',
      icon: <EventSeatIcon sx={{ fontSize: 40 }} />,
      path: '/seat-allocation',
    },
    {
      title: 'Real-time Analytics',
      description: 'Predictive analytics to forecast passenger demand and optimize seat allocation',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      path: '/analytics',
    },
    {
      title: 'Accessibility Features',
      description: 'Special accommodations for passengers with disabilities',
      icon: <AccessibilityIcon sx={{ fontSize: 40 }} />,
      path: '/accessibility',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Intelligent Seat Allocation System
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Optimizing public transportation through smart seat management
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ px: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(feature.path)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home; 