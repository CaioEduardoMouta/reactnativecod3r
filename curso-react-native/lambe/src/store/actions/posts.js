import { ADD_POST, ADD_COMMENT } from "./actionTypes"
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url:'uploadImage',
            baseURL: '',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.log(err))
            .then(res => {
                axios.post('/posts.json', { ...post }) 
                .catch(err => console.log(err))
                .then(res => console.log(res.data))
            })

   
            
    }
}

export const addComment = comment => {
    return {
        type: ADD_CO
}