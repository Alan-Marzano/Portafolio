"use client"

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Animacion = ({ children }) => {

    const { ref, inView } = useInView();
    const animation1 = useAnimation(); 

    useEffect(() => {
        if (inView) {
            animation1.start({
                y: 0,
                opacity: 1,     
                transition: { type: 'spring', duration: 2, delay: 0.25, ease : 'ease'}
            });
        }
       
    }, [inView]);

    return (
        <div ref={ref}>
            <AnimatePresence>
                <motion.div
                    initial={{y: -20, opacity: 0}} animate={animation1}
                    >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default Animacion;