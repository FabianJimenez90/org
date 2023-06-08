import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "harlandlohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys aluralatam",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie AluraLatam",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Investigacion y Gestion",
      foto: "https://github.com/christianpva.png",
      nombre: "christianpva",
      puesto: "Dev FullStack",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Dario Gonzalez",
      puesto: "Estudiante",
      fav: false
    }
])
  //Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
    const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //eliminar colaboradores
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };
  
  //actualizar color de equipo
  const actualizarColor= (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo)=> {
    if (equipo.titulo === id) {
      equipo.colorPrimario = color
    }
    return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
  }

  //like
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav; // Cambiar el valor de fav
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };
  

  return (
    <>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
        />
        )
      }
      <Footer />


    </>
  );
}
export default App