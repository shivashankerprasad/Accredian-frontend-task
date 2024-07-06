import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Modal, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerMail: '',
    referrerMobile: '',
    refereeMail: '',
    refereeMobile: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCourseChange = (e) => {
    setFormData({
      ...formData,
      course: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/referral', formData);
      console.log('Form Data Submitted:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 10, bgcolor: 'lightblue', borderRadius: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our Referral Program
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Refer your friends and earn rewards!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Refer
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Referral Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Referrer Name"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label="Referrer Mail"
                name="referrerMail"
                value={formData.referrerMail}
                onChange={handleChange}
                required
                type="email"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Referrer Mobile Number"
                name="referrerMobile"
                value={formData.referrerMobile}
                onChange={handleChange}
                required
                type="tel"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Referee Mail"
                name="refereeMail"
                value={formData.refereeMail}
                onChange={handleChange}
                required
                type="email"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Referee Mobile Number"
                name="refereeMobile"
                value={formData.refereeMobile}
                onChange={handleChange}
                required
                type="tel"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                  labelId="course-label"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleCourseChange}
                  required
                >
                  <MenuItem value="Course 1">Course 1</MenuItem>
                  <MenuItem value="Course 2">Course 2</MenuItem>
                  <MenuItem value="Course 3">Course 3</MenuItem>
                  <MenuItem value="Course 4">Course 4</MenuItem>
                  <MenuItem value="Course 5">Course 5</MenuItem>
                  <MenuItem value="Course 6">Course 6</MenuItem>
                  <MenuItem value="Course 7">Course 7</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
