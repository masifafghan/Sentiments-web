import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import 'animate.css';

function Store( ) {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    const demoProducts = [
  {
    _id: "1",
    name: "Jo Malone",
    price: 25,
    image:
      "/Images/sents-5.jpg"
  },
  {
    _id: "2",
    name: "Secret",
    price: 20,
    image:
      "/Images/smell.png"
  },
  {
    _id: "3",
    name: "The Lagend",
    price: 28,
    image:
      "/Images/images (1).jpg"
  },
  {
    _id: "4",
    name: "Spicy Amber",
    price: 50,
    image:
      "/Images/homepic.jpg"
  },
  {
    _id: "5",
    name: "Aristotle",
    price: 35,
    image:
      "/Images/aristotle_secondary_copy (1).jpg"
  },
  {
    _id: "6",
    name: "Suits",
    price: 28,
    image:
      "/Images/im333.jpg"
  },
  {
    _id: "7",
    name: "Rain on me",
    price: 36,
    image:
      "/Images/images.jpg"
  },
  {
    _id: "8",
    name: "Pistachio Treat",
    price: 45,
    image: "/Images/img222.jpg",
  }
];
  
    setProducts(demoProducts);
  }, []);
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  return (
    <>
      <section></section>
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
    <div class='text-white me-2 d-flex '>
        <div class='d-flex flex-wrap border border-white' id="store" >
          {products.map((product) => (
            <div className="product-card w-25    m-3" id="wrap" key={product._id}> 
              <img id="img2"className="w-100" src={product.image} alt={product.name} />
              <div class="card-body border border-dark">
                <p className="fs-5 fs-sm-6 text-center">{product.name}</p>
                <p className="text-center">${product.price}</p>
                <button type="button" class="btn btn-light mx-0 mx-lg-2 mb-2 btn-sm "onClick={() => addToCart(product)}>Add to Cart</button>
                <button type="button" class="btn btn-light mx-0 mx-lg- mb-2 btn-sm" ><Link to="/cart"state={{ product }}className="view-btn text-black ">View Order</Link></button>
              </div>
            </div>
          ))}
      </div>
    </div>
       <br/>
       <br/>
     <section className="d-flex bg-dark" id="dev">
          <h1 className="text-white mx-auto mt-5">Asif</h1>
            <div className="mx-auto mt-5">
              <Link className="nav-link text-white" to="/store">Shop</Link>
              <Link className="nav-link text-white" to="/about">About</Link>
              <Link className="nav-link text-white" to="/contact">Contact</Link>
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

export default Store;
