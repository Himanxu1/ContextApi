import React from 'react';
import './SingleComponent.css';
import { useContext } from 'react';
import  { CartContext } from '../Context';

const SingleComponent = ({product}) => {
  const {cart,setCart} = useContext(CartContext);

    const {image,price,title,description,category,id} = product;
  return (
    <div className='product__card' key={id}>
        <p>{title}</p>
        <img src={image} className="product__image"/>
        <p>${price}</p>
        {cart.includes(product)?(
          <button onClick={()=>setCart(cart.filter((c)=>c.id !== product.id ))}>Remove to Cart</button>
          ):(
            
            <button onClick={()=>setCart([...cart,product])}>Add to Cart</button>
        )}
      

    </div>
  )
}

export default SingleComponent