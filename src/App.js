import Seccion from "./components/Seccion"

 
const lista = [
  {
    id: 1,
    img: 1,
    franjaEtaria: "Niños",
    textoBoton: "Ver todo",
    backGroundColor: "#FFFFFF"
  },
  {
    id: 2,
    img: 2,
    franjaEtaria: "Mujer",
    textoBoton: "Ver todo",
    backGroundColor: "#FFFFFF"
  },
  {
    id: 3,
    img: 3,
    franjaEtaria: "Hombre",
    textoBoton: "Ver todo",
    backGroundColor: "#FFFFFF"
  },
  
]


function App() {
  return (
    <>
    <Seccion lista={lista} />
    </>   
  );
}

export default App;