const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite database stored in the project root
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'database.sqlite'),
  logging: false, // disable SQL logging for cleaner console output
});

// Import models
const User = require('./user')(sequelize);
const Task = require('./task')(sequelize);

// Define relationships
User.hasMany(Task, { foreignKey: 'userId', onDelete: 'CASCADE' });
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Task,
};
