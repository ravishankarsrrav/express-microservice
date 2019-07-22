const { blogs } = require('../models');
const uuid = require('uuid/v4'); // ES5
const blog = {
	/**
	* function to create a blog
	*/
	createBlog : async (data) => {
		data.id = uuid();
		return await blogs.create(data)
		.then((blog) => [true, blog.dataValues])
		.catch(() => [false, {}]);
	},
	/**
	* function to fetch only published blogs
	*/
	getPublishedBlogs : async () => {
		return await blogs.findAll({ where: { "status": "published" }, attributes: ['id', 'createdAt', 'updatedAt', 'content']})
		.then((blogs) => [true, blogs])
		.catch(() => [false, []]);
	},
	/**
	* function to fetch all the blogs
	*/
	getAllBlogs : async () => {
		return await blogs.findAll()
		.then((blogs) => [true, blogs])
		.catch(() => [false, []]);
	},
	/**
	* function to fetch all the blogs
	*/
	getBlog : async (blogId) => {
		return await blogs.findOne({where: {"id" : blogId}})
		.then((blog) => [true, blog])
		.catch(() => [false, {}]);
	},
	/**
	* function to publish Blog
	*/
	publishBlog : async (blogId) => {
		return await blogs.update({ status : "published"}, { where: { "id" : blogId }})
		.then((blog) => [true, blog.dataValues])
		.catch(() => [false, {}]);
	},
	/**
	* function to delete Blog
	*/
	deleteBlog : async (blogId) => {
		return await blogs.update({ status : "deleted"}, { where: { "id" : blogId }})
		.then((blog) => [true, blog.dataValues])
		.catch(() => [false, {}]);
	}
}

/**
* @module blog
* module contains all the services of blogs
*/
module.exports = blog;