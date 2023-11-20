import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Footer () {
    return (
        <footer className="footer">
            <div className="footer-texto">
                <p>Copyright; 2023 por Alan Marzano | todos los derechos reservados</p>
            </div>
            <div className="footer-iconTop">
                <a href="#presentacion"><FontAwesomeIcon icon={faArrowUp} style={{ color: 'black' }} width={13}  /></a>
            </div>
        </footer>
    )
}

export default Footer;