

const Boton = (props) => {
    return (
       <button
            style={{
                backgroundColor: props.objeto.backGroundColor,
                border: "1.5px solid #000000",
                color: "#3F3F40",
                padding: "8px 1px",
                fontSize: "1 rem",
                width: "30%",
                margin: "0px auto"

            }}
       >{props.objeto.textoBoton}</button> 
    )
}

export default Boton