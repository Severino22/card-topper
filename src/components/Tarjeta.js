import Boton from "./Boton"
import Imagen from "./Imagen"

const Tarjeta = (props) => {
    return (
        <figure
            style={{
                backGroundColor: "grey",
                color: "#3F3F40",
                width: "350px",
                height: "420px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column"            
                
            }}
        >
            <Imagen objeto={props.objeto.imImagen}></Imagen>
        <figcaption>
                <h4>{props.objeto.franjaEtaria}</h4>
            </figcaption>
            <Boton objeto={props.objeto}/>
        </figure>
    )
}

export default Tarjeta