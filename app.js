const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

const homeRoutes = require('./routes/employee');

// Connect to database
mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to database'));

app.use(express.urlencoded({ extended: false }));

// Import routes
app.use('/', homeRoutes);

// Setting ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));