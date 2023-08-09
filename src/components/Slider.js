import Carousel from 'react-material-ui-carousel'

import { Conteudo, Item, Slide }from '../style/styles'


import choco2 from '../img/choco2.png'
import choco1 from '../img/choco1.jpg'
import concurso from '../img/concurso.png'
import trufa from '../img/trufa.png'
import tema from '../img/tema.jpg'
import { useEffect, useRef, useState } from "react";

const images = [choco1,choco2,concurso,trufa,tema]

function Slider() {
        const carrossel = useRef();
        const [width, setWidth] = useState(0)

        useEffect(() => {
            console.log(carrossel.current?.scrollWidth, carrossel.current?.offSetWidth)
            setWidth(carrossel.current?.scrollWidth-carrossel.current?.offSetWidth)
        },[])

        return (
            <Conteudo>
                <Slide>
                <Carousel
                autoPlay='true'  
                infiniteLoop='true'
                interval={4000}            
                >
                
                {images.map(image =>(
                                    <Item key={image}>
                                        <div >
                                            <img src={image} alt="Carrossel"/>
                                        </div>
                                    </Item>
                                ))}
                </Carousel>
                </Slide>
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




            <motion.div ref={carrossel} whileTap={{ cursor: "grabbing"}}>
                        <Inner>
                            <motion.div 
                            drag="x" 
                            dragConstraints={{right: 0, left: -width}}
                            animate={{ x: 0 }}
                            initial={{ x: 100}}   
                            transition={{ duration: 0.5 }} 
                           
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
                    </motion.div> */
           
