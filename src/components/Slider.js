import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Conteudo, Slide  }from '../style/styles'

import choco2 from '../img/choco2.png'
import choco1 from '../img/choco1.jpg'
import concurso from '../img/concurso.png'
import trufa from '../img/trufa.png'

   function Slider() {

        return (
            <Conteudo>
            <Carousel width={500} >
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
            </Conteudo>
        );
    }


export default Slider;


