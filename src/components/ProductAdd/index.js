import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../redux/productSlice';
import {TextField, Button, Checkbox, FormControlLabel, Box} from '@mui/material';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (name && description && price) {
      dispatch(addProduct({
        id: Date.now(),
        name,
        description,
        price: parseFloat(price),
        available
      }));
      setName('');
      setDescription('');
      setPrice('');
      setAvailable(false);
    }
  };

  const theme = useSelector((state) => state.theme.theme);

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', mt: 4, p: 2, textAlign: 'center' }}>
      <TextField
        label="Наименование"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
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
        label="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={2}
        margin="normal"
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
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
        label="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
        sx={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
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
      <FormControlLabel
        control={
          <Checkbox
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            sx={{
              color: theme === 'light' ? '#007BFF' : '#FFD700',
              '&.Mui-checked': {
                color: theme === 'light' ? '#007BFF' : '#FFD700',
              },
            }}
          />
        }
        label="Доступно"
        sx={{
          color: theme === 'light' ? '#000' : '#FFD700',
          mt: 2,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddProduct}
        sx={{
          mt: 2,
          backgroundColor: theme === 'light' ? '#007BFF' : '#FFD700',
          '&:hover': {
            backgroundColor: theme === 'light' ? '#0056b3' : '#FFC107',
          },
        }}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default AddProduct;