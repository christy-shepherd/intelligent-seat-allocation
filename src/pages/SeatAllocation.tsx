import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

interface Seat {
  id: number;
  row: number;
  number: number;
  status: 'available' | 'occupied' | 'selected';
  accessibility: boolean;
}

const SeatAllocation: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [passengerName, setPassengerName] = useState('');
  const [journeyType, setJourneyType] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock data for seats
  const seats: Seat[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    row: Math.floor(i / 4) + 1,
    number: (i % 4) + 1,
    status: Math.random() > 0.7 ? 'occupied' : 'available',
    accessibility: i % 5 === 0,
  }));

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'available') {
      setSelectedSeat(seat);
    }
  };

  const handleBooking = () => {
    if (selectedSeat && passengerName && journeyType) {
      // Here you would typically make an API call to book the seat
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Seat Allocation
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Select Your Seat
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 2,
                p: 2,
              }}
            >
              {seats.map((seat) => (
                <Button
                  key={seat.id}
                  variant="outlined"
                  onClick={() => handleSeatClick(seat)}
                  sx={{
                    minWidth: '60px',
                    height: '60px',
                    bgcolor:
                      seat.status === 'occupied'
                        ? 'error.main'
                        : seat.status === 'selected'
                        ? 'primary.main'
                        : 'background.paper',
                    color:
                      seat.status === 'occupied'
                        ? 'white'
                        : seat.status === 'selected'
                        ? 'white'
                        : 'text.primary',
                    '&:hover': {
                      bgcolor:
                        seat.status === 'available'
                          ? 'primary.light'
                          : undefined,
                    },
                  }}
                >
                  <EventSeatIcon />
                  {seat.accessibility && (
                    <AccessibilityIcon
                      sx={{ position: 'absolute', top: 2, right: 2, fontSize: 16 }}
                    />
                  )}
                </Button>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Booking Details
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Passenger Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Journey Type</InputLabel>
                <Select
                  value={journeyType}
                  onChange={(e) => setJourneyType(e.target.value)}
                  label="Journey Type"
                >
                  <MenuItem value="short">Short Distance</MenuItem>
                  <MenuItem value="medium">Medium Distance</MenuItem>
                  <MenuItem value="long">Long Distance</MenuItem>
                </Select>
              </FormControl>
              {selectedSeat && (
                <Typography>
                  Selected Seat: Row {selectedSeat.row}, Number{' '}
                  {selectedSeat.number}
                </Typography>
              )}
              <Button
                variant="contained"
                onClick={handleBooking}
                disabled={!selectedSeat || !passengerName || !journeyType}
              >
                Book Seat
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {showSuccess && (
        <Alert
          severity="success"
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          Seat booked successfully!
        </Alert>
      )}
    </Box>
  );
};

export default SeatAllocation; 