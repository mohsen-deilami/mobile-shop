/* eslint-disable array-callback-return */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext , useState} from "react";
import {Button , Modal} from 'react-bootstrap';

import "./ProductsSection.css";
import productsContext from "../../Contexts/productsContext";
export default function ProductsSection() {
  const contextData = useContext(productsContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showToast = (product) => {
    contextData.setIsShowToast(true);
  
    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 3000);
  };

  const addToCart = (product) => {
    //چک میکند که آیا این محصول را قبلا کابر خریده یا خیر
    //اگر خریده بود فقط به تعداد آن در سبد کابر اضافه میکند و اگر نخریده باشد کل آن محصول را اضافه میکند
    let isInUserCart = contextData.userCart.some(
      (newProduct) => newProduct.title === product.title
    );

    if (!isInUserCart) {
      let buyProduct = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        img: product.img,
        count: 1,
      };
      contextData.setUserCart((prev) => [...prev, buyProduct]);
    } else {
      //محصول تکراری را ‍را بدست آورده و تعداد آنرا فقط اضافه میکند
      let userProduct = [...contextData.userCart];
      userProduct.map((userPr) => {
        if (userPr.title === product.title) {
          userPr.count++;
        }
        contextData.setUserCart(userProduct);
      });
    }
  };
  const moreInformation= (product)=>{
    setShow(true)
    console.log(show);
    }
    
  return (
    <>

    {contextData.allProducts.map((productSection )=>(
    <>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Einzelheit...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Information Uber diese Product....!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <div className="row justify-content-center mt-5" key={productSection.infos.id}>
        <h3>{productSection.title}</h3>

        {productSection.infos.map((product) => (
          <div
          className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5"
          key={productSection.infos.id}
          >
            <div className="card py-3 px-3">
              <div className="col-12 text-center">
                <img
                  src={product.img}
                  alt=""
                  className="card-img-top w-75 card-img"
                  />
              </div>
              <div className="card-body text-center">
                <p className="text">{product.title}</p>
                <p className="price">{product.price}$</p>
                <br />
                <a
                  href="javascript:void(0)"
                  className="btn btn-danger"
                  onClick={() => {
                    showToast(product);
                    addToCart(product);
                  }}
                  >
                  Add To Card
                </a>
                 <a
                  href="javascript:void(0)"
                  className="btn btn-outline-dark mt-3 text-capialize"
                  onClick={()=>setShow(true)}
                  >
                  More Information
                </a> 
               
                <p className="number">Number: {product.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  </>
        ))}
        
        </>
  );
}
