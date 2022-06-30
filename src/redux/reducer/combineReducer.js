import { combineReducers} from 'redux'
import theme from './theme'
import user from "./user"
import categories from "./categories"
import { oneProduct } from './product'

const reducer = combineReducers({
    theme,
    user,
    categories,
   
    oneProduct
})

export default reducer