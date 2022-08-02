import React,{useEffect,useState} from 'react';
import './Cart.css';
import   {CartContext}  from '../Context';
import { useContext } from 'react';
import SingleComponent from './SingleComponent';

const Cart = () => {
  const {cart}= useContext(CartContext);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) =>  acc+Number(curr.price) ,0))
  },[cart])
  return (
    <div >
      
      <h1>My Cart</h1>
      <h1>Total:${total}</h1>
      <div className="Cart__Component">
      {cart.map((product)=>{
        return (
          <SingleComponent product={product} />
        )
      })}
      </div>
    </div>
  )
}

export default Cart