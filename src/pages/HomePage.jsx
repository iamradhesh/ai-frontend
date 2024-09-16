// import React from "react";
import { Paper, Typography, Container } from "@mui/material";
import Footer from "../components/Footer"
const HomePage = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to AI Chat
        </Typography>
        <Typography variant="body1">
          This is the homepage.
        </Typography>
      </Paper>
      <Footer />
    </Container>
    
  );
};

export default HomePage;
