import { Foot, TextFooter, SuportLink, LinkSup }from '../style/styles'
import { Link } from '@mui/material';



function Footer() {

    return (
        <Foot>
            <TextFooter>
                <h3>SUPORTE</h3>
                <SuportLink>
                
                        <li>
                            <Link to="/" >Ao Leite</Link>
                        </li>
                        
                        
                        <li>
                            <Link to="/" >Dark</Link>
                        </li>
                    
                </SuportLink>
            </TextFooter>
        </Foot>

);
}

export default Footer;