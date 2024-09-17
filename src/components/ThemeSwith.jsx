import React from 'react';
import {Box, Button} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "../redux/themeSlice";

const ThemeSwitch = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box sx={{maxWidth: 400, margin: '0 auto', mt: 1, p: 0, textAlign: 'center'}}>
      <Button onClick={handleToggleTheme}
              sx={{
                backgroundColor: theme === 'light' ? '#007BFF' : '#FFD700',
                color: theme === 'light' ? '#fff' : '#333',
                '&:hover': {
                  backgroundColor: theme === 'light' ? '#0056b3' : '#FFC107',
                  color: theme === 'light' ? '#fff' : '#000',
                },
                padding: '8px 16px',
                borderRadius: '4px',
                border: `1px solid ${theme === 'light' ? '#007BFF' : '#FFD700'}`,
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s, border 0.3s',
              }}>
        {theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
      </Button>
    </Box>
  );
};

export default ThemeSwitch;
