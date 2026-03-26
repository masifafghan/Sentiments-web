import react, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function store(){
    return(
        <>
       <nav className="navbar navbar-expand-sm text-light bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
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
      <nav1 aria-label="breadcrumb">
       <ol class="breadcrumb mt-5">
         <li class="breadcrumb-item me-3"><Link className="nav-link text-white" to="/">Home</Link></li><p class='text-white me-1'> / </p>
         <li class="breadcrumb-item active text-white me-2" aria-current="page">Store</li>
       </ol>
      </nav1> 
      <h1 class='text-white me-3 animate__animated animate__fadeInUp'>ALL Products</h1>
      <br/>
      <br/>
    <div class='text-white me-2 d-flex wrap'>
        <div class="list-group m-1 me-5" id="opdiv">
          <h3 class='text-white me-1'>Browse By</h3>
           <a id='ahover' class="list-group-item list-group-item-action ">Men Collection </a>
           <a id='ahover'  class="list-group-item list-group-item-action   ">Women Collection</a>
           <a id='ahover' class="list-group-item list-group-item-action  ">Premieum Collection</a>
        </div>
    </div>
     <br/>
    <br/>
    <section className="d-flex bg-dark" id="dev">
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
       <br/>
    <br/>
    <br/>
    </section>
    </body>
        </>
    );
}
export default store;