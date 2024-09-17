import React, {useState} from 'react';
import {Box, TextField, Typography} from '@mui/material';
import {useSelector} from "react-redux";

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

  const theme = useSelector((state) => state.theme.theme);

  return (
    <Box sx={{maxWidth: 400, margin: '0 auto', mt: 4, p: 2, textAlign: 'center'}}>
      <Typography variant="h5" gutterBottom sx={{
        color: theme === 'light' ? '#000' : '#fff',
      }}>
        Конвертер температуры
      </Typography>

      <TextField
        label="Цельсия"
        variant="outlined"
        fullWidth
        value={celsius}
        onChange={handleCelsiusChange}
        margin="normal"
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#555',
          '& .MuiInputBase-input': {
            color: theme === 'light' ? '#000' : '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme === 'light' ? '#ccc' : '#777',
            },
            '&:hover fieldset': {
              borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
            },
            '&.Mui-focused fieldset': {
              borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
            },
          },
          '& .MuiInputLabel-root': {
            color: theme === 'light' ? '#000' : '#fff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }}
      />

      <TextField
        label="Фаренгейта"
        variant="outlined"
        fullWidth
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        margin="normal"
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#555',
          '& .MuiInputBase-input': {
            color: theme === 'light' ? '#000' : '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme === 'light' ? '#ccc' : '#777',
            },
            '&:hover fieldset': {
              borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
            },
            '&.Mui-focused fieldset': {
              borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
            },
          },
          '& .MuiInputLabel-root': {
            color: theme === 'light' ? '#000' : '#fff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }}
      />
    </Box>
  );
};

export default TemperatureConverter;