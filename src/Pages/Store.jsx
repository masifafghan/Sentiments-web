import react, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function store(){
    return(
        <>
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
    </body>
        </>
    );
}
export default store;