import "./HomeScreen.css"
import { useForm } from "../../hooks/formHook.js";
import { useState } from "react";
import { CounterPage } from "../counterPage/CounterPage.jsx";


export const HomeScreen = () => {

  const currentForm = {
    titulo: "",
    premio: "",
  };
  const { onInputChange, formState } = useForm(currentForm);
  const [show, setShow] = useState(true);

  const [availableNumbers, setAvailableNumbers] = useState([21, 64, 73, 109, 166, 192, 201, 354, 417, 433]);

  const showCount = (event) => {
    event.preventDefault();
    setShow(false);
  }
  return (
    <>
      {show ? (<> <div className="centrar-titulos">
        <h1>Sorteo por Números al Azar</h1>
        <h4>Escoge un ganador al azar de una lista de números con nuestra App</h4>
      </div>
        <div className="form-container">

          <form onSubmit={showCount} className="form-content">
            <div className="form-group">
              <label >Título</label>
              <input type="text" className="form-control border-input" id="titulo" onChange={onInputChange} />
            </div>
            <div className="form-group">
              <label >N° Ganadores</label>
              <input type="number" className="form-control border-input" />
            </div>
            <div className="form-group">
              <label >Premio</label>
              <input type="text" className="form-control border-input" id="premio" onChange={onInputChange} />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Participantes</label>
              <textarea className="form-control border-input" rows="10" placeholder="Ingrese los números del sorteo separados por ENTER"></textarea>
            </div>
            <button type="submit" className="button-decorate">Empezar</button>
          </form>
        </div>

        <div className="texto-debajo">
          <h1>¿Cómo funciona la herramienta Sorteo por Números al Azar?</h1>
          <h2>Sorteo de Nombres al Azar es una herramienta online y gratuita que te permite seleccionar ganadores aleatorios a partir de una lista de participantes, nombres, objetos, ciudades o cualquier otro elemento que elijas. <br /><br />
            Ingresa la lista de nombres/participantes y presiona el boton "Comenzar". Podrás aplicar filtros y seleccionar la cantidad de ganadores que desees.
            ¡Incluso puedes escoger múltiples ganadores en un solo sorteo!</h2>
        </div> </>) : (<CounterPage formState={formState} setShow={setShow}  availableNumbers={availableNumbers} setAvailableNumbers={setAvailableNumbers}/>)}


    </>
  )
}
