import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes"

const initialState = {
    posts: [{
        id: Math.random(),
        nickmame: 'Caio Mouta',
        email: 'caiomouta@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Carrazedo',
            comment: 'Stunning'
        }, {
            nickmame: 'Monteiro',
            comment: 'Orra'
        }]
    }, {
        id: Math.random(),
        nickmame: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        Image: require('../../../assets/imgs/bw.jpg'),
        comments:[]
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state, 
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]

                        }
                    }
                    return post 
                })
            }
        default: 
            return state
    }
}

export default reducer 