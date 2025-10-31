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
  };
  tasks.push(newTask);
  console.log('complite add:', newTask);
  res.json(newTask);
});
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: 'Deleted!' });
});
app.listen(3000, () => console.log('good'));