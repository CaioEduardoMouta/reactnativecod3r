import { SET_POST, ADD_COMMENT, CREATING_POST, POST_CREATED } from "./actionTypes"
import { setMessage } from "./message"
import axios from 'axios'

export const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url:'uploadImage',
            baseURL: 'https://lambe-e5e83-default-rtdb.firebaseio.com',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado'
                }))
            })
            .then(resp => {
                post.image = resp.data.imageUrl
                axios.post(`/posts.json?auth=${getState().user.toke}`, { ...post }) 
                .catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: err
                    }))
                })
                .then(res => {
                    dispatch(fetchPosts())
                    dispatch(postCreated())
                   
                })
            })

   
            
    }
}

export const addComment = comment => {
   return dispatch => {
       axios.get(`/posts/${payload.postId}.json`)
       .catch(err =>{
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado'
            }))
       })
       .then(res => {
           const comments = res.data.comments || []
           comments.push(payload.comment)
           axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`,
            { comments })
           .catch(err => { dispatch(setMessage({
            title: 'Erro',
            text: 'Ocorreu um erro inesperado'
        }))
    })
           .then(res => {
               dispatch(fetchPosts())
           })
       })
   }
}

export const setPosts = posts => {
    return {
        type: SET_POST,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }

                dispatch(setPosts(posts))
            })
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}