export const addFruit = (fruit)=>{
    return {type:"ADD_FRUIT",payload:{fruit:fruit}}
}

export const readFruit = ()=>{
    return {type:"READ_FRUIT"}
}

export const clearList = ()=>{
    return {type:"CLEAR_LIST"}
}