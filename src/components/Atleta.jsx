const Atleta = ({atleta, setAtleta, eliminarAtleta}) => {

    const {nombre, gimnasio, categoria, email, fecha, comentario, id} = atleta

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este atleta?');

        if(respuesta){
            eliminarAtleta(id)
        } 
    }


    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Gimnasio Inscripto: {""}
                <span className="font-normal normal-case">{gimnasio}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">CATEGORIA DE PESO: {""}
                <span className="font-normal normal-case">{categoria}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">EMAIL: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">FECHA DE NACIMIENTO: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">COMENTARIOS Y OBSERVACIONES: {""}
                <span className="font-normal normal-case">{comentario}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button" 
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
                        font-bold uppercase rounded-lg"
                        onClick={ () => setAtleta(atleta)}>
                    Editar
                </button>

                <button type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white
                        font-bold uppercase rounded-lg"
                        onClick={ handleEliminar }>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Atleta