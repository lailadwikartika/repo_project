// routes/tasks.js - task management routes (placeholder)
const express = require('express');
const router = express.Router();

// List all tasks (placeholder)
router.get('/', (req, res) => {
  res.send('List of tasks');
});

// Create a new task (placeholder)
router.post('/', (req, res) => {
  // In a real app, you'd validate and save the task
  res.send('Task created');
});

// Get a specific task by ID (placeholder)
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Task details for ID: ${id}`);
});

// Update a task by ID (placeholder)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  // In a real app, update the task in DB
  res.send(`Task ${id} updated`);
});

// Delete a task by ID (placeholder)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // In a real app, delete the task from DB
  res.send(`Task ${id} deleted`);
});

module.exports = router;
