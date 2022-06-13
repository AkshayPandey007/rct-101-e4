// TODO: use this store variable to create a store.
import {legacy_createStore , combineReducers} from "redux"
import { productReducer } from "./product/product.reducer";


export const rootreducer=combineReducers({
  product:productReducer
})

export const store =legacy_createStore (rootreducer);
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
