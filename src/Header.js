
import {Link} from "react-router-dom";
function Header(){
return(    

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="navbar-brand" href="#">LOGO</a>  
      <Link to={"/Home"}><a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a></Link>
      <Link to={"/Feed"}><a className="nav-item nav-link" href="#">Feed</a></Link>
      <Link to={"/About"}><a className="nav-item nav-link" href="#">About</a></Link>
      <Link to={"/Contact"}><a className="nav-item nav-link disabled" href="#">Contact</a></Link>
      <Link to={"/Login"}> <a className="nav-item nav-link disabled" href="#">Signin</a></Link>
      <a className="nav-item nav-link disabled" href="#">Signout</a>
    </div>
  </div>
</nav>
);
}
export default Header;