import React, {useState} from 'react';
import {Box, Button, Card, CardContent, IconButton, List, TextField, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

  return (
    <Box sx={{maxWidth: 400, margin: '0 auto', mt: 4, p: 2}}>
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
        helperText={`${taskText.length}/${maxChars} символов`}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        sx={{mt: 2, mb: 2}}
        disabled={!taskText.trim()}>
        Добавить задачу
      </Button>

      <List>
        {tasks.map((task) => (
          <Card key={task.id} sx={{display: 'flex', alignItems: 'center', mb: 2}}>
            <CardContent sx={{flexGrow: 1}}>
              <Typography variant="body1">{task.text}</Typography>
            </CardContent>
            <IconButton aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon/>
            </IconButton>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
