import { MenuSup, Link, MenuPrinc, Pesquisa, Icon, Login, Local, Cart, LinkUser }from './style/styles'
import { Search, ShoppingCart, User } from 'react-feather';

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
          
          <Pesquisa >
          <input type="text" placeholder="Buscar Produto" />
          <Icon>
            <Search/>
          </Icon>
          <Login>
          <LinkUser as="a" href="#"><User/>Entrar</LinkUser>
          </Login>
          <Local></Local>
          <Cart as="a" href="#">
            <ShoppingCart/>
          </Cart>
          
          </Pesquisa>
        </MenuPrinc>
      

    </div>
    
  );
}

export default App;
