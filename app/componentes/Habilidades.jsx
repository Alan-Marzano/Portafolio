"use client"

import React from "react";
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJquery, SiJavascript, SiTypescript, SiTailwindcss, SiAdobephotoshop, SiPostgresql } from "react-icons/si";


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
                        <FaHtml5 width={15} className="icon" title="HTML5" />
                        <FaCss3 width={15} className="icon" title="CSS3" />
                        <SiJavascript width={15} className="icon" title="JavaScript" />
                        <FaBootstrap width={15} className="icon" title="Bootstrap" />
                        <SiJquery width={15} className="icon" title="JQuery" />
                        <FaReact width={15} className="icon" title="ReactJS" />
                        <SiTypescript width={15} className="icon" title="TypeScript" />
                        <SiTailwindcss width={15} className="icon" title="Tailwindcss" />
                        <SiAdobephotoshop width={15} className="icon" title="Adobe Photoshop" />
                        <FaNodeJs width={15} className="icon" title="NodeJS" />
                        <FaGitAlt width={15} className="icon" title="GIT" />
                        <SiPostgresql width={15} className="icon" title="PostgreSQL" />
                    </div>
                </AnimacionDos>
            </div>
        </section>
    )
}

export default habilidades;