import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";
import Main from "./pages/Main";

function App() {
  const getLinkStyle = ({isActive}) => ({
    color: isActive ? '#007BFF' : '#333',
  });

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <BrowserRouter basename="/gb/react">
        <nav className="nav">
          <NavLink to="/" className="nav-link" style={getLinkStyle}>
            Главная страница
          </NavLink> |
          <NavLink to="/TemperatureConverter" className="nav-link" style={getLinkStyle}>
            Конвертер температуры
          </NavLink> |
          <NavLink to="/TodoList" className="nav-link" style={getLinkStyle}>
            Список задач
          </NavLink>
        </nav>
        <Routes>
          <Route path="/TemperatureConverter" element={<TemperatureConverter/>}/>
          <Route path="/TodoList" element={<TodoList tasks={tasks} setTasks={setTasks}/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;