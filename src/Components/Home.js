import React,{useState,useEffect} from 'react';
import SingleComponent from './SingleComponent';
import './Home.css';




const url = "https://fakestoreapi.com/products";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [total,setTotal] = useState(0);
 
    

    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      
      setProducts(data);
    }
   
    useEffect(() => {
      fetchData(url);

    }, [])
    
    
    return (
 
    <div className='product__container'>
        {products.map((product,index) =>{
            return (
              <SingleComponent product={product}  key={index}/>
            )
        })}
    </div>
  )
}

export default Home