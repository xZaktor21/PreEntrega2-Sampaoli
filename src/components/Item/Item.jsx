import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p>${precio} </p>
            {

            }
            <Link to={`/item/${id}`}> <button class="btnProducto">Ver Detalles</button></Link>
        </div>
    )
}

export default Item