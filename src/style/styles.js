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

export const Local = styled.div `

`;

export const Cart = styled.div `
    
    svg{
        padding-right: 25px;
        color: #32CD32;
    }
`;