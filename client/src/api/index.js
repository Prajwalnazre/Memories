import axios from 'axios';

const url = "https://reactmemories.herokuapp.com/posts";
const url2 = "https://reactmemories.herokuapp.com/posts/create";

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url2, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)