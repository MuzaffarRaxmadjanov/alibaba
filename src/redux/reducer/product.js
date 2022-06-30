export const oneProduct = (state=[], action) =>{
    switch(action.type){
        case "ADD_Product":
            return state = [...state, action.payload ]
        default:
            return state
    }
}
