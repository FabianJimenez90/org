import "./Colaborador.css"
import {RiDeleteBin5Line} from 'react-icons/ri'
import{MdFavoriteBorder, MdOutlineFavorite} from 'react-icons/md'

const Colaborador = (props) => {
    const { nombre, puesto, foto, id, fav  } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <RiDeleteBin5Line className="eliminiar" onClick={()=> eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <MdFavoriteBorder  onClick={() => like(id)}/> : <MdOutlineFavorite color="#a851c8" onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador