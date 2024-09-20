import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateProduct} from '../../redux/productSlice';
import {TextField, Button, Checkbox, FormControlLabel, Typography, Box} from '@mui/material';

const EditProduct = ({product, setEditingProductId}) => {
  const dispatch = useDispatch();

  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editAvailable, setEditAvailable] = useState(false);

  useEffect(() => {
    setEditName(product.name);
    setEditDescription(product.description);
    setEditPrice(product.price);
    setEditAvailable(product.available);
  }, []);

  const handleCancelEdit = () => {
    setEditingProductId(null); // Отменяем редактирование
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct({
      id: product.id, name: editName, description: editDescription, price: editPrice, available: editAvailable,
    }));
    setEditingProductId(null); // Закрыть форму редактирования после обновления
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setEditPrice(value);
    }
  };

  const theme = useSelector((state) => state.theme.theme);

  return (<Box sx={{
    maxWidth: 400,
    margin: '0 auto',
    mt: 4,
    p: 2,
    textAlign: 'center',
    border: '2px solid',
    borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
    borderRadius: 2
  }}>
    <Typography variant="h5" sx={{mb: 2, color: theme === 'light' ? '#007BFF' : '#FFD700'}}>
      Редактирование продукта
    </Typography>
    <TextField
      label="Наименование"
      value={editName}
      onChange={(e) => setEditName(e.target.value)}
      fullWidth
      margin="normal"
      sx={{
        backgroundColor: theme === 'light' ? '#fff' : '#333', '& .MuiInputBase-input': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme === 'light' ? '#ccc' : '#777',
          }, '&:hover fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          }, '&.Mui-focused fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }, '& .MuiInputLabel-root': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiInputLabel-root.Mui-focused': {
          color: theme === 'light' ? '#007BFF' : '#FFD700',
        },
      }}
    />
    <TextField
      label="Описание"
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
      fullWidth
      multiline
      rows={2}
      margin="normal"
      sx={{
        backgroundColor: theme === 'light' ? '#fff' : '#333', '& .MuiInputBase-input': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme === 'light' ? '#ccc' : '#777',
          }, '&:hover fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          }, '&.Mui-focused fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }, '& .MuiInputLabel-root': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiInputLabel-root.Mui-focused': {
          color: theme === 'light' ? '#007BFF' : '#FFD700',
        },
      }}
    />
    <TextField
      label="Цена"
      value={editPrice}
      onChange={(e) => handlePriceChange(e)}
      type="number"
      fullWidth
      margin="normal"
      sx={{
        backgroundColor: theme === 'light' ? '#fff' : '#333', '& .MuiInputBase-input': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme === 'light' ? '#ccc' : '#777',
          }, '&:hover fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          }, '&.Mui-focused fieldset': {
            borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }, '& .MuiInputLabel-root': {
          color: theme === 'light' ? '#000' : '#fff',
        }, '& .MuiInputLabel-root.Mui-focused': {
          color: theme === 'light' ? '#007BFF' : '#FFD700',
        },
      }}
    />
    <FormControlLabel
      control={<Checkbox
        checked={editAvailable}
        onChange={(e) => setEditAvailable(e.target.checked)}
        sx={{
          color: theme === 'light' ? '#007BFF' : '#FFD700', '&.Mui-checked': {
            color: theme === 'light' ? '#007BFF' : '#FFD700',
          },
        }}
      />}
      label="Доступно"
      sx={{
        color: theme === 'light' ? '#000' : '#FFD700', mt: 2,
      }}
    />
    <Button
      variant="contained"
      color="primary"
      onClick={handleUpdateProduct}
      sx={{
        mt: 2, backgroundColor: theme === 'light' ? '#007BFF' : '#FFD700', '&:hover': {
          backgroundColor: theme === 'light' ? '#0056b3' : '#FFC107',
        },
      }}
    >
      Обновить
    </Button>
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleCancelEdit} // Отменяем редактирование
      sx={{
        mt: 2,
        ml: 2,
        borderColor: theme === 'light' ? '#f44336' : '#ff5722',
        color: theme === 'light' ? '#f44336' : '#ff5722',
        '&:hover': {
          borderColor: theme === 'light' ? '#d32f2f' : '#ff3d00', color: theme === 'light' ? '#d32f2f' : '#ff3d00',
        },
      }}
    >
      Отмена
    </Button>
  </Box>);
};

export default EditProduct;