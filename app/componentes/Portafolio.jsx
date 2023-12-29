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
                            <Image src="/images/lista.jpg"
                                width={300}
                                height={300}
                                priority={true}
                                alt="lista-3d">
                            </Image>

                            <div className="portafolio-descripción">
                                <h4>Lista-3d</h4>
                                <p>Aplicación práctica y dinámica para tomar apuntes.</p>
                                <div>
                                    <a href="https://lista-3d.vercel.app/" className="btn-color">Visitar página</a>
                                    <a href="https://github.com/Alan-Marzano/lista-3d" className="btn-color">Ver código</a>
                                </div>
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
                                <div>
                                    <a href="https://alejandro-s.vercel.app/" className="btn-color">Visitar página</a>
                                    <a href="https://github.com/Alan-Marzano/alejandro-s" className="btn-color">Ver código</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimacionDos>

        </section>
    )
}

export default Portafolio;