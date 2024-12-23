import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createStore } from "redux";
import * as type from "./postsType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_POSTS_REQUEST:
            return { loading: true, data: [], error: "" };
        case type.FETCH_POSTS_SUCCESS:
            return { loading: false, data: action.payload.posts, error: "" };
        case type.FETCH_POSTS_FAILURE:
            return { loading: false, data: [], error: action.payload.error };
        default:
            return state;
    }
};

export default createStore(reducer, applyMiddleware(thunk));
