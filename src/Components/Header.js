import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context';
import './Header.css';

const Header = () => {
  const {cart} = useContext(CartContext);
  return (
    <div>
        <ul>
            <li><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
            <li><Link to="/cart"  style={{textDecoration:"none",color:"white"}}>Cart({cart.length})</Link></li>
        </ul>
    </div>
  )
}

export default Header