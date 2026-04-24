import { Link } from "react-router-dom";
import '../App.css';
import 'animate.css';

function home(){
    return (
        <>
        <nav className="navbar navbar-expand-lg">
           <div className="container-fluid ">
             <a className="navbar-brand text-white" href="/">Sentiments</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                 <a className="nav-link text-white"  href="/Store">Store</a>
                 <a className="nav-link text-white" href="/about">About</a>
              </div>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img id="homebg" class="d-block w-100" alt=""/>
            </div>
            <div class="carousel-item active">
              <img id="homebg" class="d-block w-100"alt=""/>
            </div>
            <div class="carousel-item active">
              <img id="homebg" class="d-block w-100"alt=""/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>



        <div class="row row-cols-1 row-cols-md-2 g-4 bg-none  bg-transparent" >
         <div class="col">
          <div class="card  bg-transparent text-white">
           <h1 classname=''>About</h1>
            <h4 classname=' animate__animated animate__fadeInUp'>
            Refers to the feelings, aopinions, or attitudes that people hold toward a
            particular topic, person, or issue.
            </h4>
          </div>
         </div>
        <div class="col">
           <div class="card">
             <img src="/Images/sents-5.jpg" class="card-img-top" alt="..."/>
           </div>
         </div>
         <div class="col">
           <div class="card">
             <img src="/Images/smell.png" class="card-img-top" alt="..."/>
           </div>
         </div>
         <div class="col  bg-transparent text-white ">
             <div class="card-body">
                  <br/>
                 <br/>
                  <h1 class=''>Contact US</h1>
                  <br/>
                  <h4 className=''>Name</h4>
                  <input classname='w-100 border-black'  type="text"></input>
                   <h4 className='my-4 mb-2'>Email</h4>
                  <input classname='m-4 px-5 w-100 border-black'  type="text"></input>
             </div>
           </div>
       </div>
        <section className="d-flex bg-dark  me-2"  id="rad6">
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
              <br/>
         <br/>
         <br/>
            </div>
            
         </section>
        </>
    );
}
export default home;