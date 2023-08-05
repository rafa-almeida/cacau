

import { motion } from 'framer-motion'
import { Conteudo, Carrossel, Inner, Item  }from '../style/styles'


import choco2 from '../img/choco2.png'
import choco1 from '../img/choco1.jpg'
import concurso from '../img/concurso.png'
import trufa from '../img/trufa.png'
import { useEffect, useRef, useState } from "react";

const images = [choco1,choco2,concurso,trufa]

function Slider() {
        const carrossel = useRef();
        const [width, setWidth] = useState(0)

        useEffect(() => {
            console.log(carrossel.current?.scrollWidth, carrossel.current?.offSetWidth)
            setWidth(carrossel.current?.scrollWidth-carrossel.current?.offSetWidth)
        },[])

        return (
            <Conteudo>
                <Carrossel>
                    <motion.div ref={carrossel} whileTap={{ cursor: "grabbing"}}>
                        <Inner>
                            <motion.div 
                            drag="x" 
                            dragConstraints={{right: 0, left: -width}}
                            initial={{ x: 100}}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8 }} 
                            
                            >

                                {images.map(image =>(
                                    <Item>
                                        <motion.div key={image}>
                                            <img src={image} alt="Carrossel"/>
                                        </motion.div>
                                    </Item>
                                ))}
                            </motion.div>
                            </Inner>
                    </motion.div>
                    
                </Carrossel>
            
            </Conteudo>
        );
    }


export default Slider;

/*<Carousel 
            autoPlay='true' 
            dynamicHeight='true' 
            infiniteLoop='true'
            interval={4000} 
           
            width={500} >
                <Slide>
                    <img src={choco2} alt="chocolate" />
                    
                </Slide>
                <Slide>
                    <img src={trufa} alt="chocolate"/>
                    
                </Slide>
                <Slide>
                    <img src={choco1} alt="chocolate" />
                   
                </Slide>
                <Slide>
                    <img src={concurso} alt="chocolate" />
                    
                </Slide>
            </Carousel>
            */
