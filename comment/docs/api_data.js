define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/:blogId/comments",
    "title": "Creates a new comment for blog. Comment creation is possible only for 'published' blogs",
    "version": "1.0.0",
    "name": "createComment",
    "group": "Comments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "const data = {\n  \"message\": \"Awesome blog!!!!\"\n}\n\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment_id",
            "description": "<p>The comment Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n\t  {\n   \t\"success\": true,\n   \t\"message\": \"comment created successfully!\",\n   \t\"comment_id\": \"229956ba-f819-4b5e-824e-4bf1ff60eb49\"\n\t  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestFailed",
            "description": "<p>Internal server error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidInput",
            "description": "<p>Invalid input passed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBlogId",
            "description": "<p>Invalid blog id passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestFailed:",
          "content": "HTTP/1.1 400 RequestFailed\n{\n  \"error\": \"Internal server error. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidInput:",
          "content": "HTTP/1.1 400 InvalidInput\n{\n  \"error\": \"The message is required\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidBlogId:",
          "content": "HTTP/1.1 400 InvalidBlogId\n{\n  \"error\": \"published blog doesn't exist with the Id you are passing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/comments/:commentId",
    "title": "Get a comment by its Id",
    "version": "1.0.0",
    "name": "getComment",
    "group": "Comments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n\t{\n\t    \"success\": true,\n\t    \"message\": \"comment fetched successfully!\",\n\t    \"blog\": {\n\t        \"id\": \"1\",\n\t        \"message\": \"awesome\",\n\t        \"blog_id\": \"1\",\n\t        \"status\": \"active\",\n\t        \"createdAt\": \"2019-07-22T16:47:48.000Z\",\n\t        \"updatedAt\": \"2019-07-22T16:47:48.000Z\"\n\t    }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestFailed",
            "description": "<p>Internal server error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBlogId",
            "description": "<p>Invalid blog id passed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCommentId",
            "description": "<p>Invalid comment id passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestFailed:",
          "content": "HTTP/1.1 400 RequestFailed\n{\n  \"error\": \"Internal server error. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidBlogId:",
          "content": "HTTP/1.1 400 InvalidBlogId\n{\n  \"error\": \"published blog doesn't exist with the Id you are passing\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidCommentId:",
          "content": "HTTP/1.1 400 InvalidCommentId\n{\n  \"error\": \"comment doesn't exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/:blogId/comments",
    "title": "Gets comments for the blog.",
    "version": "1.0.0",
    "name": "getComments",
    "group": "Comments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());",
        "type": "js"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JsonArray",
            "optional": false,
            "field": "comments",
            "description": "<p>The comments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Indicates successful or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "    HTTPS 200 OK\n\t{\n\t    \"success\": true,\n\t    \"message\": \"comments fetched successfully!\",\n\t    \"comments\": [\n\t        {\n\t            \"id\": \"1\",\n\t            \"message\": \"awesome\",\n\t            \"blog_id\": \"1\",\n\t            \"status\": \"active\",\n\t            \"createdAt\": \"2019-07-22T16:47:48.000Z\",\n\t            \"updatedAt\": \"2019-07-22T16:47:48.000Z\"\n\t        }\n\t    ]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestFailed",
            "description": "<p>Internal server error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidBlogId",
            "description": "<p>Invalid blog id passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestFailed:",
          "content": "HTTP/1.1 400 RequestFailed\n{\n  \"error\": \"Internal server error. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidBlogId:",
          "content": "HTTP/1.1 400 InvalidBlogId\n{\n  \"error\": \"published blog doesn't exist with the Id you are passing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "Comments"
  }
] });
