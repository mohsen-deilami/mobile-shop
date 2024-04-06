import React, { useContext } from "react";
import productsContext from "../../../Contexts/productsContext";

export default function Toast() {
  const contextData=useContext(productsContext)
 
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
     
       <div className={`toast align-items-center text-white bg-primary 
       ${contextData.isShowToast ? ' show ' : ''}   `}> 
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-close btn-close-white ms-2"
            onClick={()=>contextData.setIsShowToast(false)}
          ></button>
          <div className="toast-body">Add To Product Successfuly....</div>
        </div>
      </div>
    </div>
  );
}
