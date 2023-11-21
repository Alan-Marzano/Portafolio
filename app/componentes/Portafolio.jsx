"use client"
import Image from "next/image"
import Animacion from './Animacion'
import AnimacionDos from './AnimacionDos'

function Portafolio() {
    return (
        <section className="portafolio" id="portafolio">

            <Animacion>
                <h2 className="portafolio-titulo">Últimos <span>Proyectos</span></h2>
            </Animacion>
            
            <AnimacionDos>
                <div className="row">
                    <div className="portafolio-container col-sm-6 md-12">
                        <div className="portafolio-box notas">
                            <Image src="/images/NotasApp.png"
                                width={300}
                                height={300}
                                priority={true}
                                alt="NotasApp">
                            </Image>

                            <div className="portafolio-descripción">
                                <h4>NotasApp</h4>
                                <p>Aplicación práctica y dinámica para tomar apuntes.</p>
                                <a href="#" className="btn-color" >Visitar página</a>
                            </div>
                        </div>
                    </div>

                    <div className="portafolio-container col-sm-6 md-12">
                        <div className="portafolio-box alejandros">
                            <Image src="/images/alejandro's.png"
                                width={300}
                                height={300}
                                priority={true}
                                alt="Alejandros">
                            </Image>

                            <div className="portafolio-descripción">
                                <h4>Alejandro&apos;s</h4>
                                <p>Modelo de restaurante, con presentación del lugar y servicios.</p>
                                <a href="#" className="btn-color">Visitar página</a>

                            </div>
                        </div>
                    </div>
                </div>
            </AnimacionDos>

        </section>
    )
}

export default Portafolio; 