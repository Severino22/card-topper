import Tarjeta from "./Tarjeta"



const ListaTarjetas = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap"
            }}    
        >
            {
             props.lista.map(objeto => <Tarjeta key={objeto.id} objeto={objeto}/>)
            }
        </div>
    )
}

export default ListaTarjetas
 