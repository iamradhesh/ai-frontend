import  { useState } from "react";
import {
  Paper,
  Typography,
  Container,
  TextField,
  Button,
  Box,
} from "@mui/material";

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
      // Reset form data after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Connect with Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            error={!!formErrors.message}
            helperText={formErrors.message}
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ConnectPage;
