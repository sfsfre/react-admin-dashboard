// UserProfile.jsx
import React from 'react';
import { Box, Typography, Avatar, Paper, Grid, Divider } from '@mui/material';
import { useUser } from '../../UserContext';

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    // Gérer le cas où l'utilisateur n'est pas connecté
    return <div>Utilisateur non connecté</div>;
  }

  const { role, firstName, lastName, email, region, address, phoneNumber } = user;

  return (
    <Box mt={5}>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={4} textAlign="center">
              {/* Profile Image */}
              <Avatar
                alt="profile-user"
                width="400px"
                height="400px"
                src={`../../assets/USER.PNG`}
                sx={{ width: 160, height: 160 }}
              />

              {/* Role */}
              <Typography variant="h5" mt={3} mb={2}>
                Role: {role}
              </Typography>
              <Divider />

              {/* Name */}
              <Typography variant="h5" my={2}>
                Name: {`${firstName} ${lastName}`}
              </Typography>
              <Divider />

              {/* Email */}
              <Typography variant="h5" my={2}>
                Email: {email}
              </Typography>
              {/* Region */}
              <Typography variant="h5" mb={2}>
                Region: {region}
              </Typography>
              <Divider />

              {/* Address */}
              <Typography variant="h5" mb={2}>
                Address: {address}
              </Typography>
              <Divider />

              {/* Phone Number */}
              <Typography variant="h5" mb={2}>
                Numéro Téléphone: {phoneNumber}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
