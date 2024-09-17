import React, {useState} from 'react';
import {Box, Button, Card, CardContent, FormHelperText, IconButton, List, TextField, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux";

const TodoList = ({tasks, setTasks}) => {
  const [taskText, setTaskText] = useState('');
  // const [tasks, setTasks] = useState([]);
  const maxChars = 50;

  const handleAddTask = () => {
    const newTaskText = taskText.trim();
    if (newTaskText !== '') {
      setTasks([...tasks, {id: crypto.randomUUID(), text: newTaskText}]);
      setTaskText('');
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setTaskText(e.target.value);
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const theme = useSelector((state) => state.theme.theme);

  return (
    <Box sx={{maxWidth: 400, margin: '0 auto', mt: 4, p: 2, textAlign: 'center'}}>
      <TextField
        label="Введите задачу"
        variant="outlined"
        fullWidth
        value={taskText}
        onChange={handleChange}
        margin="normal"
        slotProps={{
          input: {
            maxLength: maxChars,
          },
        }}
        helperText={
          <FormHelperText
            sx={{
              color: theme === 'light' ? '#666' : '#ccc',
            }}
          >
            {`${taskText.length}/${maxChars} символов`}
          </FormHelperText>
        }
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        sx={{
          mt: 2,
          mb: 2,
          // Стиль для обычного состояния кнопки
          backgroundColor: theme === 'light' ? '#007BFF' : '#FFD700',
          '&:hover': {
            backgroundColor: theme === 'light' ? '#0056b3' : '#FFC107',
          },
          // Стиль для состояния disabled
          '&.Mui-disabled': {
            backgroundColor: theme === 'light' ? '#d3d3d3' : '#555',
            color: theme === 'light' ? '#a9a9a9' : '#777',
          },
        }}
        disabled={!taskText.trim()}>
        Добавить задачу
      </Button>

      <List>
        {tasks.map((task) => (
          <Card key={task.id} sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            backgroundColor: theme === 'light' ? '#fff' : '#555',
            color: theme === 'light' ? '#000' : '#fff',
            borderRadius: 1,
            boxShadow: theme === 'light' ? 1 : 3,
          }}>
            <CardContent sx={{flexGrow: 1}}>
              <Typography variant="body1">{task.text}</Typography>
            </CardContent>
            <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}
                        sx={{
                          color: theme === 'light' ? '#f44336' : '#ff5722',
                        }}>
              <DeleteIcon/>
            </IconButton>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
