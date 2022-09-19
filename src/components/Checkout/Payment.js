import { useState } from "react";
import styled from "styled-components";

export default function Payment(){
    const [showing, setShowing] = useState(true);
    const [disabled, setDisabled]= useState(false);
    const [paymentInfo, setPaymentInfo] = useState({});

    return(
        <Container>
            <div>
                <ion-icon name="card-outline"></ion-icon>
                <h4>Cartão de Crédito ou Débito</h4>
            </div>
            <div>
                <ion-icon name="cash-outline"></ion-icon>
                <h4>Dinheiro</h4>
            </div>
            {showing ? 
                <>
                <h3>
                    Dados do cartão
                </h3>
                <input type="text" placeholder="Nome no cartão" required onChange={e => setPaymentInfo({...paymentInfo, cardName: e.target.value})} disabled={disabled}></input>
                <input type="number" placeholder="Numero do cartão" required onChange={e => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})} disabled={disabled}></input>    
                </>
                : null}
                <h5>
                    Total
                    <p>R$: 5,00</p>
                </h5>
            <button>
                <span>
                    Concluir pedido
                </span>
            </button>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    width: auto;
    //background-color: lightcyan;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;

    ion-icon{
       font-size: 30px;
       color: #b8b8b8;
    }

    div {
        width: 100%;
        height:50px;
        border: 2px solid #bcbcbc;
        margin-bottom: 15px;
        padding: 10px;
        align-items: center;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        
    }

    h4{
        font-family: 'Poppins', cursive;
        font-weight: 500;
        font-size: 15px;
        margin-left: 15px;
        color: #757575;

    }

    h5{
        font-family: 'Poppins', cursive;
        font-weight: 700;
        font-size: 20px;
        color: #333333;
        margin-top: 30px;

        p{
            font-family: 'Poppins', cursive;
        font-weight: 500;
        font-size: 15px;
        color: #333333;
        margin-top: 10px;
        }
    }

    button{
    display: flex;
    justify-content: center;
    align-items: center;    
    border: none;
    margin-top: 50px;
    width: 100%;
    height: 46px;
    background: #333333;
    border-radius: 5px;

        span{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
        }

        :hover{
            cursor: pointer;
        }
    }

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #333333;
        margin-top: 30px;
    }

    input{
        margin-top: 20px;
        width: 100%;
        height: 40px;
        background: #FFFFFF;
        border: 2px solid #e5e5e5;
        border-radius: 5px;

        ::placeholder{
            padding-left: 15px;
            width: auto;
            height: 23px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #e5e5e5;
    }
}

`;