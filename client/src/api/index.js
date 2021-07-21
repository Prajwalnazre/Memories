import axios from 'axios';

const url = "http://localhost:5000/posts";
const url2 = "http://localhost:5000/posts/create";

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url2, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);