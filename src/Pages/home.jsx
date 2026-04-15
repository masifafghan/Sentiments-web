import { Link } from "react-router-dom";
import '../App.css';
import 'animate.css';

function home(){
    return (
        <><nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid">
             <a className="navbar-brand" href="/">Sentiments</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav">
                 <a className="nav-link" href="/Store">Store</a>
                 <a className="nav-link" href="/about">About</a>
              </div>
            </div>
          </div>
        </nav>
         <section id="homebg" className="animate__animated animate__fadeInUp border border-black">
            <button type="button" class="btn">Shop now</button>
        </section>
        <section className="d-flex m-1">
         <div className="w-50  p-5 border border-black text-white " >
           <h1 classname=''>About</h1>
            <h4 classname=' animate__animated animate__fadeInUp'>
            Refers to the feelings, opinions, or attitudes that people hold toward a
            particular topic, person, or issue.
            </h4>
         </div>
         <div className="w-50 " >
           <img className="w-100 h-100" src="/Images/sents-5.jpg" alt="About"  />
         </div>
       </section>
       <section className="d-flex ">
         <div className="w-50 " >
           <img className="w-100 h-100 " src="/Images/smell.png" alt="About"/>
         </div>
         <div className="w-50 p-5 border border-black text-white" >
            <br/>
          <br/>
           <h1 class='text-white'>Contact US</h1>
           <br/>
           <h4 className='  text-white'>Name</h4>
           <input classname='w-75'  type="text"></input>
            <h4 className='my-4 mb-2 text-white'>Email</h4>
           <input classname='m-4 px-5 w-75 '  type="text"></input>
         </div>
       </section>
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