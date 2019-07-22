const blogServices = require('../services/blog');
const validator = require('../utils/validator'); 
const blogController = {
	/**
	* function to get all published blogs
	*/
	getPublishedLogs : async (req, res) => {
		// call function to get all published logs from database
		let [success, response] = await blogServices.getPublishedBlogs();
		if(success) {
			res.send({
				"success" : true,
				"message" : "blogs with published status fetched successfully!",
				"blogs" : response
			});
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	},
	/**
	* function to get all blogs
	*/
	getAllBlogs : async (req, res) => {
		// call function to get all blogs from database
		let [success, response] = await blogServices.getAllBlogs();
		if(success) {
			res.send({
				"success" : true,
				"message" : "blogs fetched successfully!",
				"blogs" : response
			});
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	},
	/**
	* function to get blog
	*/
	getBlog : async (req, res) => {
		let {blogId} = req.params; //assign params to blogId
		// call function to get blog from database
		let [success, response] = await blogServices.getBlog(blogId);
		if(success) {
			if(response != null) {
				res.send({
					"success" : true,
					"message" : "blog fetched successfully!",
					"blog" : response
				});
			} else {
				res.status(400).send({
					"error" : "blog doesn't exists" 
				});
			}
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	},
	/**
	* function to create a blog
	*/
	createBlog : async (req, res) => {
		const { content } = req.body; //assign body to content
		// function to check if the blog content is present
		let [ valid, errorMsg ] = validator.isRequired(content, "content"); 
		if(!valid) {
			return res.status(400).send({
				"error" : errorMsg 
			});
		}
		// call function to create record in database
		let [success, response] = await blogServices.createBlog({
			"status" : "draft", 
			"content" : content 
		});
		// if record creation is successful return true response with blog Id
		if (success) {
			res.send({
				"success" : true,
				"message" : "blog created successfully!",
				"blog_id" : response.id
			});
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	},
	/**
	* function to publish blog
	*/
	publishBlog : async (req, res) => {
		const { blogId } = req.params; // assign params to blogId
		// call function to check if record exists
		let [success, response] = await blogServices.getBlog(blogId);
		if(success) {
			// return invalid if blog doesn't exists
			if(response == null) {
				return res.status(400).send({
					"error" : "blog doesn't exists" 
				});
			}
			// return if blog status is not draft
			if (response["status"] != "draft") {
				return res.status(400).send({
					"error" : "blog doesn't exists" 
				});
			}
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}

		// function to update status to published in database
		[success, response] = await blogServices.publishBlog(blogId);
		if(success) {
			res.send({
				"success" : true,
				"message" : "blog published successfully!"
			});
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	},
	/**
	* function to delete blog
	*/
	deleteBlog : async (req, res) => {
		const { blogId } = req.params; //assign params to blog
		// call function to check if record exists
		let [success, response] = await blogServices.getBlog(blogId);
		if(success) {
			if(response == null) {
				// return invalid if blog doesn't exists
				return res.status(400).send({
					"error" : "blog doesn't exists."
				});
			}
			// return if blog status is deleted
			if (response["status"] == "deleted") {
				return res.status(400).send({
					"error" : "blog doesn't exists." 
				});
			}
		} else {
			// return if something went wrong in connecting database
			return res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
		// function to update status to deleted in database
		[success, response] = await blogServices.deleteBlog(blogId);
		if(success) {
			res.send({
				"success" : true,
				"message" : "blog deleted successfully!"
			});
		} else {
			// return if something went wrong in connecting database
			res.status(400).send({
				"error" : "Internal server error. Try again!" 
			});
		}
	}
}

/**
* @module blogController
* module contains all the controller of blogs
*/
module.exports = blogController;