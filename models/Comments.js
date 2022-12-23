const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const User = require("./User");
const Tought = require("./Tought");

const Comment = db.define("Comments", {
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
});

Comment.belongsTo(Tought);
Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = Comment;
