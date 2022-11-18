import { useState, useEffect } from 'react';
import Error from './Error'
import Atleta from './Atleta';

const Formulario = ( { atletas, setAtletas,atleta, setAtleta} ) => {
  const [nombre, setNombre] = useState('');
  const [gimnasio, setGimnasio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [comentario, setComentario] = useState('');

  const [error, setError] = useState(false);

  useEffect( () => {
    if( Object.keys(atleta).length > 0 ) {
      setNombre(atleta.nombre)
      setGimnasio(atleta.gimnasio)
      setCategoria(atleta.categoria)
      setEmail(atleta.email)
      setFecha(atleta.fecha)
      setComentario(atleta.comentario)
    }
  }, [atleta])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if ([nombre, gimnasio, categoria, email, fecha, comentario].includes("")) {
      console.log("Hay al menos un campo vacio")
      setError(true)
      return;
    }

    setError(false)
 
    //Objeto de Atleta
    const objetoAtleta = {
      nombre,
      gimnasio,
      categoria,
      email,
      fecha,
      comentario,

    }

    if(atleta.id) {
      //Editando el registro
      objetoAtleta.id = atleta.id
      const atletasActualizados = atletas.map( atletaState => atletaState.id ===
        atleta.id ? objetoAtleta : atletaState )  

      setAtletas(atletasActualizados)
      setAtleta({})

    } else {
      //Nuevo registro
      objetoAtleta.id = generarId();
      setAtletas([...atletas, objetoAtleta])
    }


    //Reiniciar el Form
    setNombre('')
    setGimnasio('')
    setCategoria('')
    setEmail('')
    setFecha('')
    setComentario('')


  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-10">
      <h2 className="font-black text-3xl text-center">Seguimiento Atletas</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadí a los atletas y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
          <label htmlFor="atleta" className="block text-gray-700 uppercase font-bold">
            Nombre Atleta
          </label>

          <input
            id="atleta"
            type="text"
            placeholder="Nombre del Atleta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="gimnasio" className="block text-gray-700 uppercase font-bold">
            Gimnasio Inscripto
          </label>

          <input
            id="gimnasio"
            type="text"
            placeholder="Nombre del Gimnasio"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={gimnasio}
            onChange={(e) => setGimnasio(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="categoria" className="block text-gray-700 uppercase font-bold">
            Categoria de Peso
          </label>

          <input
            id="categoria"
            type="number"
            placeholder="93kg"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="atleta@gmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="nacimiento" className="block text-gray-700 uppercase font-bold">
            Fecha de Nacimiento
          </label>

          <input
            id="nacimiento"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="datos" className="block text-gray-700 uppercase font-bold">
            Comentarios y Observaciones
          </label>

          <textarea
            id="datos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />

        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 
          cursor-pointer transition-colors"
          value={ atleta.id ? 'Editar Atleta' : 'Agregar Atleta' }
        />

      </form>
    </div>
  )
}

export default Formulario