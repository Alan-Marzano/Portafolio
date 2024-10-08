"use client"

import Image from "next/image"
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";



import Animacion from './Animacion'
import AnimacionIzq from "./AnimacionIzq";
import AnimacionDer from "./AnimacionDer";
import AnimacionDos from "./AnimacionDos";

function Presentacion() {

    return (

        <section className="presentacion" id="presentacion">
            <div className="container-fluid">
                <div className="row-p">

                    <Animacion>
                        <div className="p">
                            <div className="content-p">
                                <h3>Hola soy</h3>
                                <AnimacionIzq>
                                    <h1>Alan Marzano</h1>
                                </AnimacionIzq>

                                <h3><span>Full Stack Developer</span></h3>

                                <AnimacionDer>
                                    <p className="párrafo">
                                        Soy una persona a la que le gusta diseñar y crear desde cero;
                                        estoy en busca una nueva experiencia laboral que me permita incrementar mis conocimientos.
                                        Te invito a navegar por mi portafolio y visitar mis proyectos.
                                    </p>
                                </AnimacionDer>

                                <div className="redes">
                                    <Link href="https://www.facebook.com/alan.marzanoguerra/"><FaFacebookF width={9}  /></Link>

                                    <Link href="https://www.instagram.com/marzanoalan/"><FaInstagramSquare width={13}  /></Link>

                                    <Link href="https://www.linkedin.com/in/alan-marzano-21702b259/"><FaLinkedin width={13}  /></Link>
                                </div>

                                <a href="./AlanMarzanoCV.pdf" download className="btn-color">Descargar CV</a>
                            </div>
                        </div>
                    </Animacion>

                    <AnimacionDos>
                        <div className="img">
                            <Image src="/images/2.jpg"
                                width={350}
                                height={275}
                                priority={true}
                                alt="Alan Marzano"
                                className="imagen"></Image>
                        </div>
                    </AnimacionDos>

                </div>
            </div>
        </section>
    )
}

export default Presentacion;