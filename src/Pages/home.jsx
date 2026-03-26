import { Link } from "react-router-dom";
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
        </>

    );
}
export default home;