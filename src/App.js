import { Provider } from 'react-redux'
import Navbar from './component/Navbar'
import ProductList from './component/ProductList'
import store from './store/Store'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './component/Cart'
import Slider from './component/Slider'
import CartProduct from './component/CartProduct'


function App() {
  return (
   <Router>
    <Provider store={store}>
     <div className='App'>
      <Navbar/>
      <Slider/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/cartProduct' element={<CartProduct/>}/>
      </Routes>
    </div>
   </Provider>
   </Router>
  )
}

export default App