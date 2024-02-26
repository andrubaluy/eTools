import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'

const Navbar = () => {
  return (
    <div className="navBar">
        <img src={logo} alt='logo' height="30"/>
        <h3>eTools Shop</h3>
        <div className="navegation center">
            <button>Home</button>
            <button>Taladros</button>
            <button>Serruchos</button>
            <button>Sierras</button>
        </div>
        <div>
          <CartWidget src={logo}/>
        </div>
    </div>
  )
}

export default Navbar