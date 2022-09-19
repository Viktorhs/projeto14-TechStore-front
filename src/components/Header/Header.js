import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../../context/UserContext"
import { logout } from "../../services/techstore"

export default function Header(){

    const {user, setUser, isLogin, setIsLogin} = useContext(UserContext);
    const [isClicked, setIsClicked] = useState(false)

    const navigate = useNavigate()

    function switchClick(){
        if(isClicked === false){
            setIsClicked(true)
        }
        if(isClicked === true){
            setIsClicked(false)
        }
    }

    
    function isLogout(){
        if(window.confirm("deseja mesmo sair?")){
            const promisse = logout()
            promisse.catch(() => {
               alert('Erro de comunicação com o servidor')
            })
            promisse.then((r) => {
               localStorage.removeItem("techstore")
               setIsLogin(false)
               setUser([])
               navigate("/")
            })
        }

    }
    
    useEffect(()=> {
    const auth = JSON.parse(localStorage.getItem("techstore"))
    if (!!auth) {
        setIsLogin(true)
    }
}, [isLogin, user])

    return(
    <Container>
        <span onClick={() => switchClick()}>
            <ion-icon name="person-circle-outline"></ion-icon>
            <Menu active ={isClicked}>
                {isLogin ? 
                <ul>
                    <li>
                        <p onClick={() => navigate("/informacao")}>Informações</p>
                    </li>
                    <li>
                        <p onClick={() => isLogout()}>Sair</p>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <p onClick={() => navigate("/login")}>Entrar</p>
                    </li>
                    <li>
                        <p onClick={() => navigate("/registro")}>Cadastro</p>
                    </li>
                </ul>}
            </Menu>
        </span>
        <h1 onClick={() => navigate("/")} >TechStore</h1>
        <span onClick={() => navigate("/carrinho")}>
            <ion-icon name="bag-outline"></ion-icon>
        </span>
    </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 90px;
    background-color: #FFFFFF;
    padding: 0 98px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px -5px, rgba(0, 0, 0, 0.04) 0px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #282828;
    
    span{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }


    h1{
        font-family: 'Press Start 2P', cursive;
        font-weight: 400;
        font-size: 26px;
        line-height: 32px;
        cursor: pointer;
    }

    ion-icon{
        font-size: 30px;
        cursor: pointer;
    }

    @media (max-width: 1050px)
    {
    &&
    {
        padding: 0 20px;
    }
    }
`
const Menu = styled.div`
    z-index: 5;
    position: absolute;
    display: ${(props) => typeof props.active !== 'boolean' || props.active ? 'initial' : "none"};
    width: ${(props) => typeof props.active !== 'boolean' || props.active ? '40%' : "0"};

    ul{
        background-color: #FFFFFF;
        margin-top: 32px;
        padding-top: 10px;
        width: 125px;
        height: 60px;
        border: 1px dotted #282828;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }

    li{ 
        padding-left: 10px;
        margin-bottom: 10px;
    }
    li p {
        cursor: pointer;
    }

`