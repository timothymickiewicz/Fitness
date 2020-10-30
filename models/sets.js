const { v4: uuidv4 } = require('uuid');

module.exports = function (sequelize, DataTypes) {
  // Stores sets and their weights into the exercise they are attached to
  const Sets = sequelize.define('Sets', {
    sets_id: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuidv4();
      },
    },
    // Stored as string to be evaluated as JSON when returned
    setValues: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Sets;
};
