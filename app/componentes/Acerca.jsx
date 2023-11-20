"use client"

import Image from "next/image"
import Animacion from './Animacion'
import Animacionizq from './AnimacionIzq'
import AnimacionDer from './AnimacionDer'

function Acerca() {

    return (

        <section className="acerca" id="acerca">
            <div className="container-fluid-2" >
                <div className="row-a">

                    <Animacionizq>
                        <div className="img-2" >
                            <Image src="/images/alan.jpg"
                                width={325}
                                height={225}
                                priority={true}
                                alt="imagen de Alan Marzano"
                                className="foto">
                            </Image>
                        </div>
                    </Animacionizq>

                    <div className="contenidos">
                        <div className="content-a">
                            <Animacion>
                                <h2 className="titulo">Acerca <span>De Mi</span></h2>
                            </Animacion>

                            <h3>Frontend developer</h3>

                            <AnimacionDer>
                                <p className="párrafo-2">
                                    Soy estudiante en la carrera de desarrollo fullstack, actualmente me desempeño como  desarrollador frontend, con bases teóricas adquiridas en Udemy.<br />
                                    Soy una persona proactiva, con aptitudes de líder que le gusta trabajar en equipo, he desarrollado proyectos de forma independiente y autodidacta.<br />
                                    Tengo formación académica y habilidades técnicas en diferentes tecnologías líderes  como HTML, CSS, JavaScript y React.<br />
                                    Me interesa seguir creciendo en mi formación como desarrollador, sumar experiencia y conocimientos; como también especializarme a futuro en otras áreas de interés como el diseño de proyectos.
                                </p>
                            </AnimacionDer>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Acerca;