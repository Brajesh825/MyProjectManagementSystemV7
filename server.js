// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routers
const projectRouter = require('./routers/projectRouter');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const milestoneRouter = require('./routers/milestoneRouter');
const permissionRouter = require('./routers/permissionRouter');

// Create the Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost/project_management_system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Set up routers
    app.use(projectRouter);
    app.use(userRouter);
    app.use(taskRouter);
    app.use(milestoneRouter);
    app.use(permissionRouter);

    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });