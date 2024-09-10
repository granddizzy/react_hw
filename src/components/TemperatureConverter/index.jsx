import React, {useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }
    setCelsius(value);

    if (value !== '') {
      const fahrenheitValue = (parseFloat(value) * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }
    setFahrenheit(value);

    if (value !== '') {
      const celsiusValue = (parseFloat(value) - 32) * 5 / 9;
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <Box sx={{maxWidth: 400, margin: '0 auto', mt: 4, p: 2, textAlign: 'center'}}>
      <Typography variant="h5" gutterBottom>
        Конвертер температуры
      </Typography>

      <TextField
        label="Цельсия"
        variant="outlined"
        fullWidth
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
      />

      <TextField
        label="Фаренгейта"
        variant="outlined"
        fullWidth
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
      />
    </Box>
  );
};

export default TemperatureConverter;