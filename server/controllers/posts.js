// import { Mongoose } from "mongoose";
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        // console.log("FETCHING!!")
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({messages : error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        // console.log("CREATING!!");
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message : error.message});
    }

}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id")

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    // console.log("UPDATING!!")
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")
    // console.log("DELETE!!")
    await PostMessage.findByIdAndRemove(id);
    // console.log("DELETING!!");
    res.json({ message: 'Post deleted successfully!!' });
}

export const likePost = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}