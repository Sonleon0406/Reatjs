import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true });

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

// Create a new todo
app.post('/todos', async(req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: req.body.completed || false,
    });
    await todo.save();
    res.send(todo);
});

// Get all todos with search and pagination
app.get('/todos', async(req, res) => {
    const { search, page = 1, limit = 10 } = req.query;
    const query = search ? { title: new RegExp(search, 'i') } : {};

    const todos = await Todo.find(query)
        .skip((page - 1) * limit)
        .limit(Number(limit));

    const totalTodos = await Todo.countDocuments(query);
    res.send({
        todos,
        totalPages: Math.ceil(totalTodos / limit),
    });
});

// Get todo by ID
app.get('/todos/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.send(todo);
});

// Update a todo
app.put('/todos/:id', async(req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(todo);
});

// Delete a todo
app.delete('/todos/:id', async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.send({ message: 'Todo deleted' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});