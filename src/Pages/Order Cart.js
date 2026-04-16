import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'animate.css';
import '../App.css';
function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
     <nav className="navbar navbar-expand-sm text-light bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/store">Store</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/about">About</Link>
                  </li>
                </ul>
                <span className="navbar-brand m-auto text-white">Sentiments</span>
              </div>
            </div>
          </nav>
          <body class='bg-dark'>
            <section id="sp">     
<nav1 aria-label="breadcrumb">
  <ol class="breadcrumb mt-5 me-5">
    <li class="breadcrumb-item me-3"><Link className="nav-link text-white" to="/">Home</Link></li><p class='text-white me-1'> / </p>
    <li class="breadcrumb-item me-3"><Link className="nav-link text-white" to="/store">Store</Link></li><p class='text-white me-1'> / </p>
    <li class="breadcrumb-item active text-white me-2" aria-current="page">Product Detail</li>
  </ol>
</nav1> 
<div className=" border border-white p-5 mb-5 mx-5 w-75 d-flex flex-wrap "   id='box'>
          {cart.length === 0 ? (
        <h5 className="text-white ">Cart is empty</h5>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item text-white text-center " id="wrap" key={index}>
              <img src={item.image} alt={item.name} />
                <h4 >{item.name}</h4>
                <p>${item.price} × {item.quantity}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </>
      )}

      </div>
      <div className=" text-center mb-5 pb-5">
          <h2 className="text-white">Total: ${totalPrice}</h2>
          <button
            className="order-btn  bg-transparent text-white border-white"
            onClick={() => navigate("/order-confirm")}
          >
            Place Order
          </button>
   </div>    
            </section>
            <section className="d-flex bg-black" id="dev">
                      <h1 className="text-white mx-auto mt-5">Asif</h1>
                        <div className="mx-auto mt-5">
                          <Link className="nav-link text-white" to="/store">Shop</Link>
                          <Link className="nav-link text-white" to="/">About</Link>
                          <Link className="nav-link text-white" to="/">Contact</Link>
                        </div>
                        <div className="w-10 mx-auto mt-5 text-white">
                        <p>
                           Privacy Policy <br />
                           Accessibility <br />
                           Terms & Conditions <br />
                           Refund Policy
                         </p>
                        </div>
                        <div className="w-10 mx-auto mt-5 text-white d-block">
                          <p>0312-7278576</p>
                          <p>Asif@gmail.com</p>
                          <p>Dera Ghazi Khan</p>
                        </div>
                        
                     </section>
       
          </body>
    </>)
}
export default Cart;