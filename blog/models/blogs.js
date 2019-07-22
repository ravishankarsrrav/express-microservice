module.exports = (sequelize, DataTypes) => {
var blogs = sequelize.define('blogs', {
	id: {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('draft', 'published', 'deleted'),
        allowNull: false,
    }
},{
	timestamps: true
});
return blogs;
};