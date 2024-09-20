import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";
import Main from "./pages/Main";
import {useSelector} from 'react-redux';
import {Box, GlobalStyles} from "@mui/material";
import ThemeSwitch from "./components/ThemeSwith";
import Products from "./pages/Products";

function App() {
  const [tasks, setTasks] = useState([]);
  const theme = useSelector((state) => state.theme.theme);

  const getLinkStyle = ({isActive}) => ({
    color: theme === 'light'
      ? (isActive ? '#007BFF' : '#333')
      : (isActive ? '#FFD700' : '#ccc'),
    '&:hover': {
      color: theme === 'light' ? '#007BFF' : '#FFD700',
    },
  });

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  const globalThemeStyles = {
    body: {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
    }
  }

  const baseUrl = '/gb/react/';

  return (
    <>
      <GlobalStyles styles={globalThemeStyles}/>
      <Box className="App" style={themeStyles}>
        <ThemeSwitch/>
        <BrowserRouter basename={baseUrl}>
          <nav className="nav">
            <NavLink to="/" className="nav-link" style={getLinkStyle}>
              Главная страница
            </NavLink> |
            <NavLink to="/TemperatureConverter" className="nav-link" style={getLinkStyle}>
              Конвертер температуры
            </NavLink> |
            <NavLink to="/TodoList" className="nav-link" style={getLinkStyle}>
              Список задач
            </NavLink> |
            <NavLink to="/Products" className="nav-link" style={getLinkStyle}>
              Продукты
            </NavLink>
          </nav>
          <Routes>
            <Route path="/TemperatureConverter" element={<TemperatureConverter/>}/>
            <Route path="/TodoList" element={<TodoList tasks={tasks} setTasks={setTasks}/>}/>
            <Route path="/Products" element={<Products tasks={tasks} setTasks={setTasks}/>}/>
            <Route path="/" element={<Main baseUrl={baseUrl}/>}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;