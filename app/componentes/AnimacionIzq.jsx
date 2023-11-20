"use client"

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const AnimacionIzq = ({ children }) => {

    const { ref: ref3, inView: inView3 } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log("use effect hook, inView = ", inView3);
        if (inView3) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: { type: 'spring', duration: 2, delay: 0.75, ease: 'ease' }
            });
        }

    }, [inView3]);

    return (
        <div ref={ref3}>
            <AnimatePresence>
                <motion.div
                    initial={{x: -20, opacity: 0}} animate={animation}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default AnimacionIzq;