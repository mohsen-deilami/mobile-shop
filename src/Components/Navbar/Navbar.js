/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Navbar.css";
import { BsFillBagFill } from "react-icons/bs";
import productsContext from "../../Contexts/productsContext";

export default function Navbar() {
  const contextData=useContext(productsContext)
  return (
    <div className="navbar navbar-expand-sm py-5 d-flex">
      <div className="container">

            
            <a href="#" className="navbar-brand">
              My-Project
            </a>

            <ul className="navbar-nav me-auto-ms-3">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
            </ul>

       
            <div className="bag-box">
              <a href="#" className="bag">
                <BsFillBagFill className="text-white" onClick={()=>contextData.setIsShowCart(true)}/>
                <span className="bg-product-counter">{contextData.userCart.length}</span>
              </a>
            </div>
          </div>

          </div>


 
 
  );
}
