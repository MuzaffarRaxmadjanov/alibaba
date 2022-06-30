import { ADD_Product, ADD_USER, CHANGE_EVENT, CHANGE_THEME } from "../consts/consts";

export const changeTheme =()=> ({ type:CHANGE_THEME })
export const changeEvent =()=> ({ type:CHANGE_EVENT })

export const addUser =(data) => ({type:ADD_USER ,payload:data})
export const addPro =(pro) => ({type:ADD_Product ,payload:pro})