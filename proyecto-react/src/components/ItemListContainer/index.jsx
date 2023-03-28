import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Card from "../Card"


const ItemListContainer = () => {
    const [productos, setProdusctos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            setProdusctos(data)
            const categoriasUnicas = [ ...new Set(data.map((producto) => producto.category))]
            setCategorias(categoriasUnicas) 

        })

    }, []); 

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria)
    }

    const productosFiltrados = categoriaSeleccionada
        ? productos.filter(
            (producto) =>producto.category === categoriaSeleccionada
            )
        : productos       


    return (
    <section>
        <div>
            <NavLink to={"/"} onClick= {() => setCategoriaSeleccionada("")}>
            </NavLink>
        </div>
        <div>
            {productosFiltrados.map((producto) => ( 
            <Card key= {producto.id} producto = {producto} />

        ))}
        </div>
    </section>
    
    )

}
export default ItemListContainer