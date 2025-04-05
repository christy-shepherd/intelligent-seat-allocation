import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import HomeIcon from '@mui/icons-material/Home';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Intelligent Seat Allocation
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/seat-allocation"
            startIcon={<EventSeatIcon />}
          >
            Seat Allocation
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/analytics"
            startIcon={<AnalyticsIcon />}
          >
            Analytics
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/accessibility"
            startIcon={<AccessibilityIcon />}
          >
            Accessibility
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Intelligent Seat Allocation System
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 