import { Link } from '@mui/material';
import { NavBar, Menu, SubMenu, NavLink  }from '../style/styles'




function Navbar() {

    return (
        <nav>
            <NavBar>
                <Menu>
                    <li>
                        <NavLink  as="a" href="/" > <h4>TODOS OS PRODUTOS</h4></NavLink>
                    </li>

                    <li>
                        <NavLink as="a" href="/"  > <h4>TIPOS DE CHOCOLATES</h4></NavLink>
                        <SubMenu>
                            <li>
                                <Link to="/" >Ao Leite</Link>
                            </li>
                            <li>
                                <Link to="/" >Dark</Link>
                            </li>
                            <li>
                                <Link to="/" >Branco</Link>
                            </li>
                            <li>
                                <Link to="/" >Frutas</Link>
                            </li>
                            <li>
                                <Link to="/" >Nuts</Link>
                            </li>
                            <li>
                                <Link to="/" >Recheados</Link>
                            </li>
                            <li>
                                <Link to="/" >Vegano</Link>
                            </li> 
                            <li>
                                <Link to="/" >Zero Açúcar</Link>
                            </li>
                        </SubMenu>
                    </li>


                    <li>
                        <NavLink as="a" href="/"> <h4>NOSSAS MARCAS</h4></NavLink>
                        <SubMenu>
                            <li>
                                <Link to="/" >Pure</Link>
                            </li>
                            <li>
                                <Link to="/" >Excellence</Link>
                            </li>
                            <li>
                                <Link to="/" >Creation</Link>
                            </li>
                            <li>
                                <Link to="/" >Frutas</Link>
                            </li>
                            <li>
                                <Link to="/" >Swiss Classic</Link>
                            </li>
                        </SubMenu>

                    </li>

                    <li>
                        <NavLink as="a" href="/"> <h4>PRESENTES</h4></NavLink>
                        <SubMenu>
                            <li>
                                <Link to="/" >Latas Presenteáveis</Link>
                            </li>
                            <li>
                                <Link to="/" >Nossos Clássicos</Link>
                            </li>
                            <li>
                                <Link to="/" >Pralinas</Link>
                            </li>
                        </SubMenu>
                    </li>

                    <li>
                        <NavLink  as="a" href="/" > <h4>PROMOÇÕES</h4></NavLink>
                    </li>

                    <li>
                        <NavLink  as="a" href="/" > <h4>OUTLET</h4></NavLink>
                    </li>

                    <li>
                        <NavLink  as="a" href="/" > <h4>CONHEÇA O APP</h4></NavLink>
                    </li>
                </Menu>
            </NavBar>
        </nav>
    );
}

export default Navbar;