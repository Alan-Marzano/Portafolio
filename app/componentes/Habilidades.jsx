"use client"

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faReact, faBootstrap, faJs } from '@fortawesome/free-brands-svg-icons'

import Animacion from './Animacion'
import AnimacionDos from './AnimacionDos'

function habilidades() {

    return (
        <section className="habilidades" id="habilidades">

            <div className="contenido-h container-fluid">
                <Animacion>
                    <h2 className="titulo-habilidades">Mis <span>Habilidades</span></h2>
                </Animacion>

                <AnimacionDos>
                    <div className="iconos">
                        <FontAwesomeIcon icon={faHtml5} width={15} className="icon"  />
                        <FontAwesomeIcon icon={faCss3} width={15} className="icon"  />
                        <FontAwesomeIcon icon={faJs} width={15} className="icon"  />
                        <FontAwesomeIcon icon={faBootstrap} width={15} className="icon"  />
                        <FontAwesomeIcon icon={faReact} width={15} className="icon"  />

                    </div>
                </AnimacionDos>
            </div>
        </section>
    )
}

export default habilidades;