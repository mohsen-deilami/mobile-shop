import './App.css';
import products from './data/product';
import ProductsSection from './Components/ProductsSection/ProductsSection';
import Toast from './Components/Toast/Toast.js/Toast';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import productsContext from './Contexts/productsContext';
import { useState } from 'react';



function App() {
  const[allProducts,setAllProducts]=useState(products);
  const [isShowCart,setIsShowCart]=useState(false);
  const [isShowToast,setIsShowToast]=useState(false)
  const[userCart,setUserCart]=useState([]);

  return (
    <productsContext.Provider   value={
                                        {allProducts,
                                        isShowCart,
                                        setIsShowCart,
                                        userCart,
                                        setUserCart,
                                        isShowToast,
                                        setIsShowToast}
    }
      >
   <Navbar/>
   <main className="pb-5">
    <div className="container">
      <h1 className="text-center main-title">All Products</h1>
       <ProductsSection/>
    </div>
   </main>
   <Toast/>
   <Cart/>
   </productsContext.Provider>
   
  );
}

export default App;
