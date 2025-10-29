import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.post('/tasks', (req, res) => {
  console.log('Получен POST запрос:', req.body)
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  tasks.push(newTask);
  console.log('Задача добавлена:', newTask);
  res.json(newTask);
});
app.listen(3000, () => console.log('good'));