import { NavLink } from "react-router-dom"
import styles from "./navbar.module.css"
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const activeStyle = {
        color: "blue"
    }

  return (
  <nav className={styles.container}>

    <NavLink to="/home" style={({isActive}) => (isActive ? activeStyle : undefined)}>  
    <h1>Kia Ora grow shop</h1>
    </NavLink>

    <NavLink to="/products" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Products</p>
    </NavLink>

    <NavLink to="/men's clothing" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Men's Clothing</p>
    </NavLink>
    <NavLink to="/women's's clothing" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Wemen's Clothing</p>
    </NavLink>
    <NavLink to="/jewelery" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Jewelery</p>
    </NavLink>
    <NavLink to="/electronics" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Electronis</p>
    </NavLink>
    
    

    <NavLink to="/contacto" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <p>Contacto</p>
    </NavLink>

    <NavLink to="/cart" style={({isActive}) => (isActive ? activeStyle : undefined)}>
    <FaShoppingCart />
    </NavLink>

  </nav>
  )
};

export default Navbar;