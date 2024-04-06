/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import {BsBag} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import './Cart.css'
import productsContext from '../../Contexts/productsContext'

export default function Cart() {
  const contextData=useContext(productsContext)
  return (
    //برای نمایش یا عدم نمایش سبد خرید
    <aside className={`bag-sidebar ${contextData.isShowCart ? 'active' : ''}`}>
        <h3 className="bag-title">
            <span ><BsBag/> Bag </span>
            <span><AiOutlineClose className="close-icon" 
            onClick={()=>contextData.setIsShowCart(false)}
            /></span>
        </h3>
        <div className="row bag-wrapper">
       {/*    
        ابتدا چک میکند آیا سبد متری پراست یا خیر
        اگر پر بود نمایش میدهد و اگر نبود میگوید خالی است */}
          {contextData.userCart.length ?  contextData.userCart.map(product =>(
            <>
<hr/>
<div className="col-12 mt-5" key={product.id}>
   <div className="card py-3 px-3">
     <div className="col-12 text-center">
       <img src={product.img}  alt="Product Image"  className="cart-img-top w-75" />
     </div>
     <div className="card-body d-flex flex-column justify-content-center align-items-center">
       <p className="card-text">{product.title}</p>
       <p className="price">{product.price}$</p>
       <br />
       <a href="#" className="btn btn-danger">
         Buy
       </a>
       <a  href="#" className="btn btn-outline-dark mt-3 text-capitalize" >
         More Information
       </a>
       <p className="number">{product.count}</p>
       

     </div>
   </div>
  </div>

  
            </>
   )) : 
   <>
   <hr />
   <h3 className='bag-comment'>Sie haben keine Bestellung registriert .... </h3>
       <hr/>
   </>
   }
   <a  href="#" 
   className={`btn btn-success mt-3 text-capitalize ${!contextData.userCart.length ? 'disabled' : ''}`} > 
   Bezahlen </a>
      
        </div>
      
        
    </aside>
  )
}
