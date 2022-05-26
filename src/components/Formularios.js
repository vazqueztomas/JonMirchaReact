import React, { useState } from "react";
// esta forma no es la recomendada.

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);
  
//   const handleSubmit = (e) => {
//       e.preventDefault();
//       alert('Formulario enviado!.');
//   }
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           name="nombre"
//           id="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu sabor JS favorito:</p>
//         <input
//           type="radio"
//           name="sabor"
//           id="vanilla"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="react"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="angular"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           name="sabor"
//           id="vue"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>

//         <p>Elige tu lenguaje de programacion favorito</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">- - -</option>
//           <option value="js">Javascript</option>
//           <option value="php">Php</option>
//           <option value="py">Python</option>
//           <option value="go">Go</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto términos y condiciones.</label>
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br/>
//         <input type="submit" value=""  />
//       </form>
//     </>
//   );
// }


export default function Formularios() {
    // inicializarlo como objeto vacio
    const [form, setForm] = useState({});
    
    const handleChange = e => {
       setForm({...form, [e.target.name]:e.target.value}) // lo que ya traiga form -> mas [e.target.name]:e.target.value => esto hace que se haga como un objeto.
    }

    const handleChecked = (e) => {
        setForm({...form, [e.target.name]:e.target.checked})
    } 
    return (
      <>
        <h2>Formularios</h2>
        <form>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <p>Elige tu sabor JS favorito:</p>
          <input
            type="radio"
            name="sabor"
            id="vanilla"
            value="vanilla"
            onChange={handleChange}
          />
          <label htmlFor="vanilla">Vanilla</label>
          <input
            type="radio"
            name="sabor"
            id="react"
            value="react"
            onChange={handleChange}
          />
          <label htmlFor="react">React</label>
          <input
            type="radio"
            name="sabor"
            id="angular"
            value="angular"
            onChange={handleChange}
          />
          <label htmlFor="angular">Angular</label>
          <input
            type="radio"
            name="sabor"
            id="vue"
            value="vue"
            onChange={handleChange}
          />
          <label htmlFor="vue">Vue</label>
  
          <p>Elige tu lenguaje de programacion favorito</p>
          <select
            name="lenguaje"
            onChange={handleChange}
            defaultValue=""
          >
            <option value="">- - -</option>
            <option value="js">Javascript</option>
            <option value="php">Php</option>
            <option value="py">Python</option>
            <option value="go">Go</option>
            <option value="rb">Ruby</option>
          </select>
          <br />
          <label htmlFor="terminos">Acepto términos y condiciones.</label>
          <input
            type="checkbox"
            name="terminos"
            id="terminos"
            onChange={handleChecked}
          />
          <br/>
          <input type="submit"  />
        </form>
      </>
    );
  }
  