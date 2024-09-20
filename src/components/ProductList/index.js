import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeProduct, toggleAvailability, updateProduct} from '../../redux/productSlice';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Box, TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditProduct from "../ProductEdit";
import ProductEdit from "../ProductEdit";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [editingProductId, setEditingProductId] = useState(null);

  const theme = useSelector((state) => state.theme.theme);

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id); // Устанавливаем редактируемый продукт чтобы открыть редактирование
  };

  return (
    <Box sx={{maxWidth: 600, margin: '0 auto', mt: 4}}>
      <List>
        {products.map((product) => (
          <ListItem
            key={product.id}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 1,
              backgroundColor: theme === 'light' ? '#fff' : '#333',
              color: theme === 'light' ? '#000' : '#fff',
              boxShadow: theme === 'light' ? 1 : 3,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            {editingProductId === product.id ? (
              // Форма редактирования
              <ProductEdit product={product} setEditingProductId={setEditingProductId}/>
            ) : (
              // Обычная карточка продукта
              <>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{color: theme === 'light' ? '#000' : '#fff'}}>
                      {product.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{color: theme === 'light' ? '#666' : '#ccc'}}>
                      {`Описание: ${product.description}, Цена: ${product.price}`}
                    </Typography>
                  }
                  primaryTypographyProps={{sx: {fontWeight: 'bold'}}}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={product.available}
                      onChange={() => handleToggleAvailability(product.id)}
                      sx={{
                        color: theme === 'light' ? '#007BFF' : '#FFD700',
                        '&.Mui-checked': {
                          color: theme === 'light' ? '#007BFF' : '#FFD700',
                        },
                      }}
                    />
                  }
                  label="Доступно"
                  sx={{ml: 2}}
                />
                <Button
                  variant="outlined"
                  onClick={() => handleEditProduct(product)}
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
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductList;