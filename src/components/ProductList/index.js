import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  List,
  ListItem,
  Box
} from '@mui/material';
import ProductEdit from "../ProductEdit";
import ProductListItem from "../ProductListItem";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const [editingProductId, setEditingProductId] = useState(null);

  const theme = useSelector((state) => state.theme.theme);

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
              <ProductEdit product={product} setEditingProductId={setEditingProductId}/>
            ) : (
              <ProductListItem product={product} setEditingProductId={setEditingProductId}/>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductList;