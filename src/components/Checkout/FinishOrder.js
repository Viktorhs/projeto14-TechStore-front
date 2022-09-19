import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Finish(){
    const navigate = useNavigate();
    const {dados} = useContext(UserContext);

    function voltarHome(){
        navigate("/", {replace: true});
    }

    return(
        <Container>
            <Apresentation>
                <h1>Compra concluida!</h1>
            </Apresentation>
            <Body>
                <ion-icon name="checkmark-circle"></ion-icon>
                <h3>Obrigado por comprar!</h3>
                <p>Ticket do pedido:</p>
                <p>{dados.orderId} </p>
                <button onClick={voltarHome}><span>Continuar comprando</span></button>
            </Body>
        </Container>
        )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 1050px)
    {
    &&
    {
        padding: 0 20px;
    }
    }


`

const Apresentation = styled.div`
    width: 100%;
    height: 350px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    h1{
        font-weight: 600;
        font-size: 58px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;

const Body = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 100px 100px 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;

    ion-icon{
        font-size: 150px;
        margin-top: 30px;
    }

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;    
        border: none;
        width: 70%;
        height: 100px;
        background: #333333;
        border-radius: 20px;
        margin-top: 200px;
        margin-bottom: 20px;

        span{
            width: 100%;
            height: 23px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color: #FFFFFF;
            margin-bottom: 5px;
        }

        :hover{
            cursor: pointer;
        }
    }

    p{
        margin-top: 15px;
    }
`;