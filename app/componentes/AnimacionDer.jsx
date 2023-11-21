"use client"

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimacionDer = ({ children }) => {

    const { ref: ref4, inView: inView4 } = useInView();
    const animation3 = useAnimation();
    
    useEffect(() => {
        console.log("use effect hook, inView = ", inView4);
        if (inView4) {
            animation3.start({
                x: 0,
                opacity: 1,
                transition: { type: 'spring', duration: 2, delay: 1, ease : 'ease'}
            });
        }
        
    }, [inView4]);

    return (
        <div ref={ref4}>
            <AnimatePresence>
                <motion.div
                initial={{x: 15, opacity: 0}} animate={animation3}
                > 
                {children} 
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default AnimacionDer;