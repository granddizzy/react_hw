import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeProduct} from '../../redux/productSlice';
import {
  ListItemText,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductListItem = ({product, setEditingProductId}) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleEditProduct = (id) => {
    setEditingProductId(id); // Устанавливаем редактируемый продукт чтобы открыть редактирование
  };

  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <ListItemText
        primary={
          <Typography variant="h6" sx={{color: theme === 'light' ? '#000' : '#fff'}}>
            {product.name}
          </Typography>
        }
        secondary={
          <Typography variant="body2" sx={{color: theme === 'light' ? '#666' : '#ccc'}}>
            {`Описание: ${product.description}, Цена: ${product.price}, ${product.available ? 'в наличии' : 'нет в наличии'}`}
          </Typography>
        }
        primaryTypographyProps={{sx: {fontWeight: 'bold'}}}
      />
      <Button
        variant="outlined"
        onClick={() => handleEditProduct(product.id)}
        sx={{
          marginRight: 1,
          borderColor: theme === 'light' ? '#007BFF' : '#FFD700',
          color: theme === 'light' ? '#007BFF' : '#FFD700',
          '&:hover': {
            borderColor: theme === 'light' ? '#0056b3' : '#FFC107',
            color: theme === 'light' ? '#0056b3' : '#FFC107',
          },
        }}
      >
        Редактировать
      </Button>
      <IconButton
        edge="end"
        onClick={() => handleRemoveProduct(product.id)}
        sx={{
          color: theme === 'light' ? '#f44336' : '#ff5722',
          '&:hover': {
            color: theme === 'light' ? '#d32f2f' : '#ff3d00',
          },
        }}
      >
        <DeleteIcon/>
      </IconButton>
    </>
  );
};

export default ProductListItem;