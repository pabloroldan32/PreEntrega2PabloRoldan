import { Link } from "react-router-dom"
import styles from "./card.module.css"


const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
    <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt={producto.title} width="200" height="250"/>
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
        <p>{producto.category}</p>
        <button id = "${producto.id}">Agregar al Carrito</button>   
    </div>
    </Link> 
  )
}

export default Card