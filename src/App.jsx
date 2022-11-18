import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadosAtletas from "./components/ListadosAtletas"



function App() {

  const [atletas, setAtletas] = useState(JSON.parse(localStorage.getItem('atletas')) ?? []);
  const [atleta, setAtleta] = useState({});

  useEffect(() => {
    localStorage.setItem('atletas', JSON.stringify( atletas ));
  }, [atletas])

  const eliminarAtleta = id => {
    const atletasActualizados = atletas.filter(atleta => atleta.id !== id);
    setAtletas(atletasActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex" >
        <Formulario
          atletas={atletas}
          setAtletas={setAtletas}
          atleta={atleta}
          setAtleta={setAtleta}
        />
        <ListadosAtletas
          atletas={atletas}
          setAtleta={setAtleta}
          eliminarAtleta={eliminarAtleta}
        />
      </div>
    </div>
  )
}

export default App
