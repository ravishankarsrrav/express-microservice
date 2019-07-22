module.exports = (sequelize, DataTypes) => {
var comments = sequelize.define('comments', {
	id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    blog_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('active', 'deleted'),
        allowNull: false,
    }
},{
	timestamps: true
});
return comments;
};