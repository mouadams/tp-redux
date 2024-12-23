import * as type from "./postsType";
import axios from "axios";

// Action creators
export const fetchPostsRequest = () => {
    return {
        type: type.FETCH_POSTS_REQUEST,
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: type.FETCH_POSTS_SUCCESS,
        payload: { posts: posts },
    };
};

export const fetchPostsFailure = (err) => {
    return {
        type: type.FETCH_POSTS_FAILURE,
        payload: { error: err },
    };
};

// Thunk action creator
export const fetchPosts = () => {
    return function (dispatch) {
        dispatch(fetchPostsRequest());
        axios
            .get("https://fakestoreapi.com/products/category/electronics")
            .then((response) => dispatch(fetchPostsSuccess(response.data)))
            .catch((err) => dispatch(fetchPostsFailure(err.message)));
    };
};
