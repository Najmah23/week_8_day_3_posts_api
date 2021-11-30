const mongoose = require("mongoose")
const Joi = require("joi")

const postSchema = new mongoose.Schema({
  title: String,
  body: {
    type: String,
    default: "no body",
  },
  owner: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})
const postJoi = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  body: Joi.string().min(5).max(1000).required(),
  owner: Joi.string().min(5).max(1000).required(),
  image: Joi.string().uri().min(1).max(100000).required(),
})
const Post = mongoose.model("Post", postSchema)
module.exports.Post = Post
module.exports.postJoi = postJoi
