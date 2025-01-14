import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types"
import axios from "axios"
// Product actions here
export const productData = () =>(dispatch)=>
{
dispatch({type:GET_PRODUCTS_LOADING})

axios.get("  http://localhost:8080/products").then((r)=>{
dispatch({type:GET_PRODUCTS_SUCCESS , payload:r.data})
})
.catch(()=>{
    dispatch({type:GET_PRODUCTS_ERROR})
})
}