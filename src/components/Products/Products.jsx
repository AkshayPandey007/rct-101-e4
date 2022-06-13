import React from "react";
import { useEffect } from "react";
import {useSelector , useDispatch} from "react-redux"
import { productData } from "../../store/product/product.actions";
import Product from "./Product/Product";

const Products = () => {
  const dispatch = useDispatch();
  const{loading,error,data}=useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(productData())
  },[])
  if(loading)return<h1>Loading...</h1>
  if(error)return<h1>Something went wrong...</h1>
  return <div>
{data.map((e)=>(
<Product key={e.id} {...e}/>
))}
  </div>;
};

export default Products;
