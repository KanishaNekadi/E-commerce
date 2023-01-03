import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {

    const items = useSelector((state) => state.cart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><b>MyStore</b></Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto justify-content-center">
            <li className="nav-item active">
              <a className="nav-link" href="#">Electronics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">jewelery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Men's Clothing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Women's Clothing</a>
              </li>
          </ul>
        </div>
        <Link to={'/cart'}>
          <button type="button" className="cart-btn btn btn-danger">
             {/* <h5><FaShoppingCart/>Cart <span className="badge ">{items.length}</span></h5> */}
             <h4><FaShoppingCart/></h4>
             <h5>Cart<span className="badge ">{items.length}</span></h5>
          </button>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
    </nav>
  )
}

export default Navbar