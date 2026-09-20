// app.js - Entry point for TaskFlow application
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 2 }
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.user = req.session.user || null;
  next();
});

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const tasksRouter = require('./routes/tasks');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});

module.exports = app;
