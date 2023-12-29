"use client"

import Animacion from './Animacion'
import AnimacionDos from './AnimacionDos'

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <Animacion>
                <h2 className="contacto h2">Contacto</h2>
            </Animacion>

            <AnimacionDos>
                <form action="https://formsubmit.co/nvvalanlp@gmail.com" method="POST">
                    <div className="input-box">
                        <input type="text" name="nombre" placeholder="Nombre"></input>
                        <input type="email" name="email" placeholder="Email"></input>
                    </div>

                    <div className="input-box">
                        <input type="number" name="celular" placeholder="Celular"></input>
                        <input type="text" name="asunto" placeholder="Asunto"></input>
                    </div>

                    <textarea id="" cols="30" rows="10" name="mensaje" placeholder="Mensaje"></textarea>

                    <input type="submit" value="Enviar mensaje" className="btn-color"></input>

                    <input type="hidden" name="_next" value="https://portfolio-alan-marzano.vercel.app/" />

                </form>
            </AnimacionDos>

        </section>
    )
}

export default Contacto;