window.$ = window.jQuery = require("jquery");


import CommentsService from "./CommentsService";
import CommentsListManager from "./CommentsListManager";
import CommentFormManager from "./CommentFormManager";
import LikeManager from "./LikeManager.js"
import PubSub from "pubsub-js";

const commentService = new CommentsService("/comments/");

const commentsListManager = new CommentsListManager(".comments-list", commentService, PubSub);
commentsListManager.init();

const commentFormManager = new CommentFormManager(".comment-form", commentService, PubSub);
commentFormManager.init();

const likeManager = new LikeManager();
likeManager.init();
likeManager.findlike();

