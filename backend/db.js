// backend/db.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Required for Render connections
        }
    }
});

const Feedback = sequelize.define('Feedback', {
    name: { type: DataTypes.STRING, allowNull: false },
    mobile: { type: DataTypes.STRING, allowNull: false, unique: true }, // Ensure one feedback per number
    courseContentRating: { type: DataTypes.INTEGER, allowNull: false },
    facultyRating: { type: DataTypes.INTEGER, allowNull: false },
    messRating: { type: DataTypes.INTEGER, allowNull: false },
    overallExperience: { type: DataTypes.INTEGER, allowNull: false },
    comments: { type: DataTypes.TEXT }
});

module.exports = { sequelize, Feedback };