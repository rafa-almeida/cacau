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

