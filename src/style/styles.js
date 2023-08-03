import styled  from 'styled-components'


export const MenuSup = styled.div `

    height: 5vh;
    width: 100vw;
    background-color:#1C1C1C;
    margin-top: -7px;
    margin-left:-8px;
    :hover{
        padding-bottom:14px;
        border-bottom: 2px solid #32CD32;
        
    }
`;

export const Link = styled.a `
  font-family:sans-serif;
  font-weight:500;
    color:#C0C0C0;
    font-size:10px;
    text-decoration:none;
    padding:0 5px 0 20px;
    
`;

export const MenuPrinc = styled.div `
    height: 40vh;
   display: flex;
    width: 100vw;
    margin-left:-8px;
    background-image: url('https://dengo.vteximg.com.br/arquivos/ids/162281-360-360/dengo-chocolates-caixa-classico-ao-leite-3.jpg?v=638200127701700000');
    
`;

export const Pesquisa = styled.div `

    display: flex;
    justify-content:center;
    padding-left: 500px;
    padding-top:50px;
    width: 80em;
    margin-bottom: 0;
    padding-bottom:0;

    input{
        
        width: 20em;
        height: 30px;
        border-radius: 10px;
        border: #fff;
        padding-left: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

   
`;

export const Icon = styled.div `
    position: absolute;
    svg{
        padding: 3px 225px 0 0;
        width: 20px;
    }
`;

export const Login = styled.div `
   
   
`;

export const LinkUser = styled.a `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:#fff;
    font-size:15px;
    font-weight: 400;
    text-decoration:none;
    padding-right: 80px;
   svg{
    margin-left:280px;
    color: #32CD32;
   }
`;

export const Cart = styled.div `
    
    svg{
        padding-right: 25px;
        color: #32CD32;
    }
`;


////NAVBAR/////

export const NavBar = styled.div `
   max-width: 90vw;
    height: 8vh;
    display: flex;
    padding: 0 20px 0 0;
    

`;
export const NavLink = styled.h4`
    cursor: pointer;
    color: #B8860B;
    font-family: 'Dai Banna SIL', serif;
    margin-top: -40px;
    
    h4:hover  {
       
        background-color:#FFD700;
        color: white;
        
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Dai Banna SIL', serif;
    cursor: pointer;

    li{
        position: relative;
        border-radius: 10px;
    }

    li:hover ul{
    display: block;
    }

    a{
    
    padding: 17px;
    text-decoration: none;
    font-size: 12px;
    display: block;
    }

    
`;

export const SubMenu = styled.ul`
    list-style: none;
    display:none;
    position: absolute;
    top: 10px;
    left: 0;
    background: whitesmoke;
    min-width: 130px;
    
   
    li{
        position: relative;
        top: 0;
        width: 90px;
        
    }

    li:hover a{
        background-color:#FFD700;
        color: white;
    }

    

    a{
        font-family: Arial, Helvetica, sans-serif;
        color: #B8860B;
        width: 70px;
        height: 8px;
    }
`;