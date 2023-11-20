
import Presentacion from './componentes/Presentacion'
import Acerca from './componentes/Acerca'
import Habilidades from './componentes/Habilidades'
import Portafolio from './componentes/Portafolio'
import Contacto from './componentes/Contacto'



export default function Home() {
  return (
    <div>
      <Presentacion />
      <Acerca />
      <Habilidades />
      <Portafolio />
      <Contacto />
    </div>
  )
}