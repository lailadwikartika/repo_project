module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    priority: {
      type: DataTypes.ENUM('Low', 'Medium', 'High'),
      defaultValue: 'Medium',
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
      defaultValue: 'To Do',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
  return Task;
};
