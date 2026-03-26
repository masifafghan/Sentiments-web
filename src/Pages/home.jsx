import { Link } from "react-router-dom";
import '../App.css';
import 'animate.css'
function home(){
    return (
        <>
         {/* Nav Bar */}
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
         <section id="homebg" className="mx-5 animate__animated animate__fadeInUp border border-black">
            <button type="button" class="btn">Shop now</button>
        </section>
        <section className="d-flex mx-5 m-1">
         <div className="w-50 ms-1 text-white"  id='rad1' >
           <h1 classname='m-4 pe-5 pt-5'>About</h1>
            <h4 classname='me-5 mt-5 animate__animated animate__fadeInUp'>
            Refers to the feelings, opinions, or attitudes that people hold toward a
            particular topic, person, or issue.
            </h4>
         </div>
         <div className="w-50 " >
           <img className="w-100 h-100" src="/Images/sents-5.jpg" alt="About" id='rad2' class='img12' />
         </div>
       </section>
       <section className="d-flex mx-5">
         <div className="w-50 " >
           <img className="w-100 h-100 " src="/Images/sents-5.jpg" alt="About" id='rad2' class='img12' />
         </div>
         <div className="w-50 ms-1 text-white"  id='rad1' >
           <h1 classname='m-4 pe-5 pt-5'>About</h1>
            <h4 classname='me-5 mt-5  animate__animated animate__fadeInUp'>
            Refers to the feelings, opinions, or attitudes that people hold toward a
            particular topic, person, or issue.
            </h4>
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