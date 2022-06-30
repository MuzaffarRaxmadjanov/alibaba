import { ADD_USER } from "../consts/consts"

const user = (state=null, action) => {
    switch(action.type){
        case ADD_USER:
            return state =  action.payload.user
        default:
            return state
    }
}

export default user
