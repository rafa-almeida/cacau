import { MenuSup, Link, MenuPrinc, Pesquisa, Icon, Login, Cart, LinkUser, Logo }from './style/styles'
import { Search, ShoppingCart, User } from 'react-feather';
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Products from './components/Products'
import Footer from './components/Footer'
import logo from '../src/img/logo.png'

function App() {

  return (
    <div>
      <div>
        <MenuSup>
          <Link as="a" href="#"> Seja um Revendedor</Link>
          <Link as="a" href="#"> Seja um Franqueado</Link>
          <Link as="a" href="#"> Área para Empresas</Link>
          <Link as="a" href="#"> Vale Presente</Link>
          <Link as="a" href="#"> Trabalhe conosco</Link>
        </MenuSup>
      </div>
      
      <MenuPrinc>
          <Logo >
                        
            <img src={logo} alt="Logo"/>     
          </Logo>

        <Pesquisa >
          <input type="text" placeholder="Buscar Produto"/>
        <Icon as="a" href="#">
          <Search />
        </Icon>
        <Login>
          <LinkUser as="a" href="#"><User/>Entrar</LinkUser>
        </Login>
        <Cart as="a" href="#">
          <ShoppingCart/>
        </Cart>
          
        </Pesquisa>
      </MenuPrinc>

      <NavBar />
      <Slider />
      <Products />
      <Footer />

    </div>
    
  );
}

export default App;
