// import blog controller
const blogController = require('../controller/blog');
const express = require('express');
const router = express.Router();
/**
* @api {get} /api/v1/blogs Retrieve all the published blogs
* @apiVersion 1.0.0
* @apiName getPublishedLogs
* @apiGroup Blogs
* @apiExample {js} Example usage:
* $http.get(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {JsonArray} blogs The blogs
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	{
*	    "success": true,
*	    "message": "blogs fetched successfully!",
*	    "blogs": [
*	        {
*	            "id": "1",
*	            "content": "hello Im your client",
*	            "createdAt": "2019-07-22T07:07:23.000Z",
*	            "updatedAt": "2019-07-22T08:03:12.000Z"
*	        },
*	        {
*	            "id": "8018b1a0-37a4-4c6b-9e4e-6ecd4d43ad54",
*	            "content": "hello Im also your client ",
*	            "createdAt": "2019-07-22T10:09:47.000Z",
*	            "updatedAt": "2019-07-22T10:09:47.000Z"
*	        }
*	    ]
*	}
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
*/
router.get('/api/v1/blogs', blogController.getPublishedLogs);


/**
* @api {post} /api/v1/blogs Creates a blog with 'draft' status
* @apiVersion 1.0.0
* @apiName createBlog
* @apiGroup Blogs
* @apiExample {js} Example usage:
* const data = {
*   "content": "It creates a blog with draft status"
* }
*
* $http.post(url, data)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {String} blog_id The blog Id
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	  {
*    	"success": true,
*    	"message": "blog created successfully!",
*    	"blog_id": "229956ba-f819-4b5e-824e-4bf1ff60eb49"
*	  }
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
* @apiError InvalidInput Invalid input passed.
* @apiErrorExample {json} InvalidInput:
*     HTTP/1.1 400 InvalidInput
*     {
*       "error": "The content is required"
*     }
*/
router.post('/api/v1/blogs', blogController.createBlog);


/**
* @api {get} /api/v1/blogs/all Retrieve all the blogs in the blogger
* @apiVersion 1.0.0
* @apiName getAllBlogs
* @apiGroup Blogs
* @apiExample {js} Example usage:
* $http.get(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {JsonArray} blogs The blogs
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	{
*	    "success": true,
*	    "message": "blogs fetched successfully!",
*	    "blogs": [
*	        {
*	            "id": "1",
*	            "content": "hello mr Im your client",
*	            "status": "deleted",
*	            "createdAt": "2019-07-22T07:07:23.000Z",
*	            "updatedAt": "2019-07-22T08:03:12.000Z"
*	        },
*	        {
*	            "id": "8018b1a0-37a4-4c6b-9e4e-6ecd4d43ad54",
*	            "content": "hello mr Im your client",
*	            "status": "draft",
*	            "createdAt": "2019-07-22T10:09:47.000Z",
*	            "updatedAt": "2019-07-22T10:09:47.000Z"
*	        }
*	    ]
*	}
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
*/
router.get('/api/v1/blogs/all', blogController.getAllBlogs);

/**
* @api {get} /api/v1/blogs/:blogId Get a blog by its Id
* @apiVersion 1.0.0
* @apiName getBlog
* @apiGroup Blogs
* @apiExample {js} Example usage:
* $http.get(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {Json} blog The blog details
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	{
*	    "success": true,
*	    "message": "blog fetched successfully!",
*	    "blog": {
*	        "id": "1",
*	        "content": "hello mr Im your client",
*	        "status": "deleted",
*	        "createdAt": "2019-07-22T07:07:23.000Z",
*	        "updatedAt": "2019-07-22T08:03:12.000Z"
*	    }
*	}
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
*
* @apiError InvalidBlogId Invalid blog id passed.
* @apiErrorExample {json} InvalidBlogId:
*     HTTP/1.1 400 InvalidBlogId
*     {
*       "error": "blog doesn't exists"
*     }
*/
router.get('/api/v1/blogs/:blogId', blogController.getBlog);

/**
* @api {post} /api/v1/blogs/:blogId/publish Updates blog status to published
* @apiVersion 1.0.0
* @apiName publishBlog
* @apiGroup Blogs
* @apiExample {js} Example usage:
* $http.post(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*     {
*		    "success": true,
*		    "message": "blogs published successfully!"
*	  }
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
*
* @apiError InvalidBlogId Invalid blog id passed.
* @apiErrorExample {json} InvalidBlogId:
*     HTTP/1.1 400 InvalidBlogId
*     {
*       "error": "blog doesn't exists"
*     }
*/
router.post('/api/v1/blogs/:blogId/publish', blogController.publishBlog);


/**
* @api {delete} /api/v1/blogs/:blogId Deletes the blog and all related comments
* @apiVersion 1.0.0
* @apiName deleteBlog
* @apiGroup Blogs
* @apiExample {js} Example usage:
* $http.delete(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*     {
*    	"success": true,
*    	"message": "blog deleted successfully!"
*	 }
*
* @apiError RequestFailed Internal server error.
* @apiErrorExample {json} RequestFailed:
*     HTTP/1.1 400 RequestFailed
*     {
*       "error": "Internal server error. Try again!"
*     }
*
* @apiError InvalidBlogId Invalid blog id passed.
* @apiErrorExample {json} InvalidBlogId:
*     HTTP/1.1 400 InvalidBlogId
*     {
*       "error": "blog doesn't exists"
*     }
*/
router.delete('/api/v1/blogs/:blogId', blogController.deleteBlog);

/**
* This modules defines all the routes of the blogs
* @module router
*/
module.exports = router;