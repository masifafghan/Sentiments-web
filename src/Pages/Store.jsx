import react, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function store(){
       const [products, setProducts] = useState([]);

  useEffect(() => {
    const demoProducts = [
  {
    _id: "1",
    name: "Jo Malone",
    price: 25,
    image:
      "/pic/sents-5.jpg"
  },
  {
    _id: "2",
    name: "Secret",
    price: 20,
    image:
      "/pic/smell.png"
  },
  {
    _id: "3",
    name: "The Lagend",
    price: 28,
    image:
      "/pic/images (1).jpg"
  },
  {
    _id: "4",
    name: "Spicy Amber",
    price: 50,
    image:
      "/pic/813Wp4oNOFL.jpg"
  },
  {
    _id: "5",
    name: "Aristotle",
    price: 35,
    image:
      "/pic/aristotle_secondary_copy (1).jpg"
  },
  {
    _id: "6",
    name: "Suits",
    price: 28,
    image:
      "/pic/im333.jpg"
  },
  {
    _id: "7",
    name: "Rain on me",
    price: 36,
    image:
      "/pic/images.jpg"
  },
  {
    _id: "8",
    name: "Pistachio Treat",
    price: 45,
    image: "/pic/img222.jpg",
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
        <div class='w-75' id='card1'>
          {products.map((product) => (
            <div className="product-card " id="wrap" key={product._id}> 
              <img id="img2"className="w-100" src={product.image} alt={product.name} />
              <div class="card-body">
                <h5 className=" m-2 text-center">{product.name}</h5>
                <p className="price m-2 text-center">${product.price}</p>
                <button className="cart-btn mx-4 bg-transparent border-white"onClick={() => addToCart(product)}>Add To Cart</button>
                <button className="cart-btn bg-transparent border-white"><Link to="/order"state={{ product }}className="view-btn text-black ">View Order</Link></button>
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