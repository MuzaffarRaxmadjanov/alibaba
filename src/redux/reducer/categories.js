import { CHANGE_EVENT } from "../consts/consts"

const categories = (state=false, action) => {
    switch(action.type){
        case CHANGE_EVENT:
            return state = !state
        default:
            return state
    }
}

export default categories