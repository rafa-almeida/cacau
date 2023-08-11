import { Foot, TextFooter, SuportLink,SocialIcon, Text, Text2, Float, Info, Info2, LogoFooter }from '../style/styles'

import { Link } from '@material-ui/core';

import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'
import logo from '../img/logo.png'


function Footer() {

    return (
        <Foot>
            <TextFooter>
                
                <SuportLink>
                    <LogoFooter>
                        <img src={logo} alt="Logo"/>  
                    </LogoFooter>
                      
                    <SocialIcon a href='#'>
                        <div >
                            <img src={facebook} alt="Facebook"/>
                        </div>

                        <div >
                            <img  src={instagram} alt="Instagram"/>
                        </div>

                        <div >
                            <img  src={youtube} alt="Youtube"/>
                        </div>
                    </SocialIcon>
                               
                                           
                </SuportLink>

                <Float>
                    <Text>
                        <p>
                            A SóCacau se compromete em utilizar ovos de galinhas livres de gaiolas em todas as suas operações. Estamos trabalhando para garantir essa transição até 2025.
                            As imagens expostas neste site são meramente ilustrativas.Preços apresentados na loja virtual podem variar de acordo com a região. Informações sobre preços, prazos de validade, estoque e origem podem ser obtidas diretamente nas lojas. Consulte a loja para verificar disponibilidade. Preços, estoques, informações e condições disponíveis no site estão sujeitos a alterações sem aviso prévio. *Preços e produtos do Choco-Outlet são válidos somente para compras realizadas na loja virtual sujeito a disponibilidade de estoque.
                        </p>
                    </Text>

                    <Text2>
                        <p>
                            © Copyright 2023. Todos os direitos reservados. Cacau Lover Comércio Eletrônico LTDA CNPJ 00.000.000/0001-00.
                        </p>
                        
                        <Info>
                            <Info2>
                                    
                                <li>
                                    <Link to="/" >Termos de Uso</Link>
                                </li>
                                <li>
                                    <Link to="/" >Política de Privacidade</Link>
                                </li>
                                <li>
                                    <Link to="/" > Política de Trocas</Link>
                                </li>
                                <li>
                                    <Link to="/" > FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/" > Regulamentos</Link>
                                </li>
                                <li>
                                    <Link to="/" > Trabalhe Conosco</Link>
                                </li>
                                <li>
                                    <Link to="/" > SAC</Link>
                                </li>  
                            </Info2>

                            <Link a href= "#" > <h4>De volta ao topo</h4></Link>
                        </Info>
                    </Text2>
                </Float>
                

            </TextFooter>
        </Foot>

    );
}

export default Footer;