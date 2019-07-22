const commentServices = require('../services/comment');
const validator = require('../utils/validator'); 
const request = require('request');
const config = require('../config/config.js');
const commentController = {
	/**
	* function to create comment
	*/
	createComment : async (req, res) => {
		const { blogId } = req.params; //assign params to blog
		const { message } = req.body; //assign body to message
		// function to check if the comment message is present
		let [ valid, errorMsg ] = validator.isRequired(message, "message"); 
		if(!valid) {
			return res.status(400).send({
				"error" : errorMsg 
			});
		}

		const url = `${config.blogAPI}/api/v1/blogs/${blogId}`;
		const options = {
			method: 'get',
			json: true,
			url: url
		};
		// call function to check blog if exists
		await request(options, async (err, reqResponse, body) => {
			if(err) {
				// return if something went wrong in connecting external API server
				return res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
			if (reqResponse.statusCode != 200) {
				// return if API returns error
				return res.status(400).send({
					"error" : "published blog doesn't exist with the Id you are passing" 
				});
			}
			if (body.blog.status != "published") {
				// return if blog satus is not published
				return res.status(400).send({
					"error" : "published blog doesn't exist with the Id you are passing"
				});
			}
			// call function to create comment
			let [success, response] = await commentServices.createComment({
				"status" : "active", 
				"message" : message,
				"blog_id" : blogId
			});
			// if record creation is successful return true response with comment Id
			if (success) {
				res.send({
					"success" : true,
					"message" : "comment added successfully!",
					"comment_id" : response.id
				});
			} else {
				// return if something went wrong in connecting database
				res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
		});	
	},
	/**
	* function to get comments of the blog
	*/
	getComments : async (req, res) => {
		const { blogId } = req.params; //assign params to blog
		const url = `${config.blogAPI}/api/v1/blogs/${blogId}`; // Blog API
		const options = {
			method: 'get',
			json: true,
			url: url
		};
		// call function to check blog if exists
		await request(options, async (err, reqResponse, body) => {
			if(err) {
				// return if something went wrong in connecting external API server
				return res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
			if (reqResponse.statusCode != 200) {
				// return if API returns error
				return res.status(400).send({
					"error" : "published blog doesn't exist with the Id you are passing" 
				});
			}
			// call function to retrieve comments of the blog
			let [success, response] = await commentServices.getComments(blogId);
			if (success) {
				res.send({
					"success" : true,
					"message" : "comments fetched successfully!",
					"comments" : response
				});
			} else {
				// return if something went wrong in connecting database
				res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
		});	
	},
	/**
	* function to get comment of the comment using commentId
	*/
	getComment : async (req, res) => {
		const { blogId, commentId } = req.params; //assign params to blog
		const url = `${config.blogAPI}/api/v1/blogs/${blogId}`; // Blog API
		const options = {
			method: 'get',
			json: true,
			url: url
		};
		// call function to check blog if exists
		await request(options, async (err, reqResponse, body) => {
			if(err) {
				// return if something went wrong in connecting external API server
				return res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
			if (reqResponse.statusCode != 200) {
				// return if API returns error
				return res.status(400).send({
					"error" : "published blog doesn't exist with the Id you are passing" 
				});
			}
			// call function to retrieve comments of the blog by comment ID
			let [success, response] = await commentServices.getComment(blogId, commentId);
			if (success) {
				if(response != null) {
					res.send({
						"success" : true,
						"message" : "comment fetched successfully!",
						"comment" : response
					});
				} else {
					res.status(400).send({
						"error" : "comment doesn't exists" 
					});
				}
			} else {
				// return if something went wrong in connecting database
				res.status(400).send({
					"error" : "Internal server error. Try again!" 
				});
			}
		});	
	}
}

/**
* @module commentController
* module contains all the controller of comments
*/
module.exports = commentController;