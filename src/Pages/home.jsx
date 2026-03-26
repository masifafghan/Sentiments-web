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
         <section id="homebg" className="d-flex justify-item-center justify-content-center  mx-1 animate__animated animate__fadeInUp border border-black">
            <button type="button" class="btn">Shop now</button>
        </section>
        <section className="d-flex m-1">
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
        </>
    );
}
export default home;