import Atleta from "./Atleta"

const ListadosAtletas = ({ atletas, setAtleta, eliminarAtleta}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {atletas && atletas.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listados Atletas</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Admistra los {""}
            <span className="text-indigo-600 font-bold">Atletas registrados</span>
          </p>
          {atletas.map(atleta => (
            <Atleta
              key={atleta.id}
              atleta={atleta}
              setAtleta={setAtleta}
              eliminarAtleta={eliminarAtleta}
            />
          ))}
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Atletas</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Empeza a agregar{" "}
            <span className="text-indigo-600 font-bold">Atletas</span>
          </p>
        </>
      )}

    </div>

  )
}

export default ListadosAtletas