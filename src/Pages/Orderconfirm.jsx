import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function OrderConfirm() {

  localStorage.removeItem("cart");

  return (
    <div className="confirm-container text-center text-white" id='odpg'>
      <div className="confirm-card ">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Your bakery items are being prepared.</p>
        <Link to="/Store">
          <button>Back to Store</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirm;
 