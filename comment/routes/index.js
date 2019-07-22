// import comment controller
const commentController = require('../controller/comment');
const express = require('express');
const router = express.Router();

/**
* @api {post} /api/v1/blogs/:blogId/comments Creates a new comment for blog. Comment creation is possible only for 'published' blogs
* @apiVersion 1.0.0
* @apiName createComment
* @apiGroup Comments
* @apiExample {js} Example usage:
* const data = {
*   "message": "Awesome blog!!!!"
* }
*
* $http.post(url, data)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {String} comment_id The comment Id
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	  {
*    	"success": true,
*    	"message": "comment created successfully!",
*    	"comment_id": "229956ba-f819-4b5e-824e-4bf1ff60eb49"
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
*       "error": "The message is required"
*     }
*
* @apiError InvalidBlogId Invalid blog id passed.
* @apiErrorExample {json} InvalidBlogId:
*     HTTP/1.1 400 InvalidBlogId
*     {
*       "error": "published blog doesn't exist with the Id you are passing"
*     }
*/
router.post('/api/v1/blogs/:blogId/comments', commentController.createComment);

/**
* @api {get} /api/v1/blogs/:blogId/comments Gets comments for the blog.
* @apiVersion 1.0.0
* @apiName getComments
* @apiGroup Comments
* @apiExample {js} Example usage:
* $http.get(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {JsonArray} comments The comments
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	{
*	    "success": true,
*	    "message": "comments fetched successfully!",
*	    "comments": [
*	        {
*	            "id": "1",
*	            "message": "awesome",
*	            "blog_id": "1",
*	            "status": "active",
*	            "createdAt": "2019-07-22T16:47:48.000Z",
*	            "updatedAt": "2019-07-22T16:47:48.000Z"
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
*
* @apiError InvalidBlogId Invalid blog id passed.
* @apiErrorExample {json} InvalidBlogId:
*     HTTP/1.1 400 InvalidBlogId
*     {
*       "error": "published blog doesn't exist with the Id you are passing"
*     }
*/
router.get('/api/v1/blogs/:blogId/comments', commentController.getComments);

/**
* @api {get} /api/v1/blogs/:blogId/comments/:commentId Get a comment by its Id
* @apiVersion 1.0.0
* @apiName getComment
* @apiGroup Comments
* @apiExample {js} Example usage:
* $http.get(url)
*   .success((res, status) => doSomethingHere())
*   .error((err, status) => doSomethingHere());
*
* @apiSuccess {Json} comment The comment
* @apiSuccess {String} message Response message
* @apiSuccess {Boolean} success Indicates successful or not
*
* @apiSuccessExample {json} Success response:
*     HTTPS 200 OK
*	{
*	    "success": true,
*	    "message": "comment fetched successfully!",
*	    "blog": {
*	        "id": "1",
*	        "message": "awesome",
*	        "blog_id": "1",
*	        "status": "active",
*	        "createdAt": "2019-07-22T16:47:48.000Z",
*	        "updatedAt": "2019-07-22T16:47:48.000Z"
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
*       "error": "published blog doesn't exist with the Id you are passing"
*     }
*
* @apiError InvalidCommentId Invalid comment id passed.
* @apiErrorExample {json} InvalidCommentId:
*     HTTP/1.1 400 InvalidCommentId
*     {
*       "error": "comment doesn't exists"
*     }
*/
router.get('/api/v1/blogs/:blogId/comments/:commentId', commentController.getComment);
/**
* This modules defines all the routes of the comments
* @module router
*/
module.exports = router;