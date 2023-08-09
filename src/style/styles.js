import styled  from 'styled-components'


export const MenuSup = styled.div `

    height: 5vh;
    width: 99vw;
    background-color:#1C1C1C;
    margin-top: -7px;
    margin-left:-8px;
    :hover{
        padding-bottom:14px;
        border-bottom: 2px solid #FFD700;
        
    }
`;

export const Link = styled.a `
    font-family:sans-serif;
    font-weight:100;
    color:#C0C0C0;
    font-size:15px;
    text-decoration:none;
    padding:1px 5px 0 20px;
    
`;

export const MenuPrinc = styled.div `
    height: 40vh;
    display: flex;
    width: 99vw;
    margin-left:-8px;
    background-image: url('https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80');
    background-repeat:no-repeat;
    background-size:cover;
    
`;

export const Pesquisa = styled.a `

    display: flex;
    justify-content:center;
    padding-left: 500px;
    padding-top:50px;
    width: 80em;
    margin-bottom: 0;
    padding-bottom:0;

    input{
        
        width: 30em;
        height: 40px;
        border-radius: 10px;
        border: #fff;
        padding-left: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

   
`;

export const Icon = styled.div `
    position: absolute;
    svg{
        padding: 6px 130px 0 0;
        width: 20px;
    }
`;

export const Login = styled.div `
`;

export const LinkUser = styled.a `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:#000000;
    font-size:20px;
    font-weight: 400;
    text-decoration:none;
    padding-right: 80px;

    :hover {
        color: #FFD700;
    }
   svg{
    margin-left:280px;
    color: #000;
    
    
   }
`;

export const Cart = styled.div `
    
    svg{
        padding-right: 55px;
        color: #000;
    }
    
`;


////NAVBAR/////

export const NavBar = styled.div `
    width: 99vw;
    height: 6vh;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    background-color:#F5F5F5;
    

`;
export const NavLink = styled.h4`
    cursor: pointer;
    color: #B8860B;
    font-family: 'Dai Banna SIL', serif;
    letter-spacing: 1px;
    margin-top: -40px;
    
    h4{
        font-size: medium;
    }
    h4:hover  {
        text-decoration: underline;
        
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Dai Banna SIL', serif;
    cursor: pointer;
    justify-content: center;
    align-items: start;
    padding-left: 140px;
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
    top: 14px;
    left: 0;
    background: #FFFAFA;
    min-width: 130px;
    letter-spacing:1px;
   z-index:10;
    
   
    li{
        position: relative;
        top: 0;
        width: 90px;
        
    }

    li:hover a{
        text-decoration: underline;
        
    }

    

    a{
        
        font-family: Arial, Helvetica, sans-serif;
        color: #B8860B;
        width: 90px;
        height: 8px;
        
    }
`;


////CAROUSEL/////

export const Item = styled.div `
   min-height:600px;
    min-width: 800px;
    padding-top: 14px;
   
    div{
        
        z-index:-1;
    }

    img  {
        
        width: 100%;
        height:70%;
        border-radius: 12px;
        pointer-events: none;
    }

`;


export const Conteudo = styled.div `
    
    
    width: 99%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
   
    


    /*background-color:#F5F5F5;
    position: absolute;
    z-index: -1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 99vw;*/
`;

export const Slide = styled.div `
    width: 80em;
   height: 5em;
`;

////PRODUCTS/////

export const ContImage = styled.div `
width: 100%;
height: 70vh;
position: relative;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin-top: 800px;

`;

////FOOTER/////

export const Foot = styled.div`
    width: 100%;
    height: 30vh;
    padding-top: 20px;

`;

export const TextFooter = styled.div`
    h3{
        font-size: 30px;
        font-weight: 100;
        font-family: 'Dai Banna SIL', serif;
    }

`;

export const SuportLink = styled.ul`

`;

