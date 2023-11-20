"use client"

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Animacion = ({ children }) => {

    const { ref, inView } = useInView();
    const animation = useAnimation(); 

    useEffect(() => {
        console.log("use effect hook, inView = ", inView);
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,     
                transition: { type: 'spring', duration: 4, delay: 0.25, ease : 'ease'}
            });
        }
       
    }, [inView]);

    return (
        <div ref={ref}>
            <AnimatePresence>
                <motion.div
                    initial={{y: -20, opacity: 0}} animate={animation}
                    >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default Animacion;