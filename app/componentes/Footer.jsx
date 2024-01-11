import React from "react";
import { GoArrowUp } from "react-icons/go";


function Footer () {
    return (
        <footer className="footer">
            <div className="footer-texto">
                <p>Copyright; 2023 por Alan Marzano | todos los derechos reservados</p>
            </div>
            <div className="footer-iconTop">
                <a href="#presentacion"><GoArrowUp style={{ color: 'black' }} width={13}  /></a>
            </div>
        </footer>
    )
}

export default Footer;