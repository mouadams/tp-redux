const initialState = {
    fruit:[]
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'ADD_FRUIT':
            return {...state,fruit:[...state.fruit,action.payload.fruit]}

        case 'READ_FRUIT':
            return state

        case 'CLEAR_LIST':
            return {...state,fruit:[]}

        default:
            return state;
    }
}