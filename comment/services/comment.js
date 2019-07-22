const { comments } = require('../models');
const uuid = require('uuid/v4'); // ES5
const comment = {
	/**
	* function to create a blog
	*/
	createComment : async (data) => {
		data.id = uuid();
		return await comments.create(data)
		.then((comment) => [true, comment.dataValues])
		.catch(() => [false, {}]);
	},
	/**
	* function to fetch all the comments of the blog
	*/
	getComments : async (blogId) => {
		return await comments.findAll({ where: { "blog_id" : blogId }})
		.then((comments) => [true, comments])
		.catch(() => [false, []]);
	},
	/**
	* function to get comment of the blog by comment ID and blog ID
	*/
	getComment : async (blogId, commentId) => {
		return await comments.findOne({ where: { "blog_id" : blogId, id : commentId }})
		.then((comment) => [true, comment])
		.catch(() => [false, []]);
	},
}

/**
* @module comment
* module contains all the services of comments
*/
module.exports = comment;