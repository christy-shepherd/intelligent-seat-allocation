import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Alert,
} from '@mui/material';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import HearingIcon from '@mui/icons-material/Hearing';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface AccessibilityRequest {
  name: string;
  contact: string;
  requirements: {
    wheelchair: boolean;
    visualImpairment: boolean;
    hearingImpairment: boolean;
    other: boolean;
  };
  additionalNotes: string;
}

const Accessibility: React.FC = () => {
  const [request, setRequest] = useState<AccessibilityRequest>({
    name: '',
    contact: '',
    requirements: {
      wheelchair: false,
      visualImpairment: false,
      hearingImpairment: false,
      other: false,
    },
    additionalNotes: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRequirementChange = (requirement: keyof AccessibilityRequest['requirements']) => {
    setRequest((prev) => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [requirement]: !prev.requirements[requirement],
      },
    }));
  };

  const handleSubmit = () => {
    // Here you would typically make an API call to submit the request
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Accessibility Services
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Request Special Assistance
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Full Name"
                value={request.name}
                onChange={(e) =>
                  setRequest((prev) => ({ ...prev, name: e.target.value }))
                }
                fullWidth
              />
              <TextField
                label="Contact Information"
                value={request.contact}
                onChange={(e) =>
                  setRequest((prev) => ({ ...prev, contact: e.target.value }))
                }
                fullWidth
              />
              <FormControl component="fieldset">
                <Typography variant="subtitle1" gutterBottom>
                  Special Requirements
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={request.requirements.wheelchair}
                      onChange={() => handleRequirementChange('wheelchair')}
                      icon={<WheelchairPickupIcon />}
                    />
                  }
                  label="Wheelchair Access"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={request.requirements.visualImpairment}
                      onChange={() => handleRequirementChange('visualImpairment')}
                      icon={<VisibilityIcon />}
                    />
                  }
                  label="Visual Impairment Assistance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={request.requirements.hearingImpairment}
                      onChange={() => handleRequirementChange('hearingImpairment')}
                      icon={<HearingIcon />}
                    />
                  }
                  label="Hearing Impairment Assistance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={request.requirements.other}
                      onChange={() => handleRequirementChange('other')}
                    />
                  }
                  label="Other Requirements"
                />
              </FormControl>
              <TextField
                label="Additional Notes"
                value={request.additionalNotes}
                onChange={(e) =>
                  setRequest((prev) => ({
                    ...prev,
                    additionalNotes: e.target.value,
                  }))
                }
                multiline
                rows={4}
                fullWidth
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!request.name || !request.contact}
              >
                Submit Request
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Accessibility Features
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <WheelchairPickupIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1">Wheelchair Access</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dedicated spaces and ramps for wheelchair users
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <VisibilityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1">Visual Assistance</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Braille signage and audio announcements
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <HearingIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1">Hearing Assistance</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visual alerts and sign language support
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {showSuccess && (
        <Alert
          severity="success"
          sx={{ position: 'fixed', bottom: 20, right: 20 }}
        >
          Request submitted successfully!
        </Alert>
      )}
    </Box>
  );
};

export default Accessibility; 