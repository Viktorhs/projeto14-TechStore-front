import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCart } from "../../services/techstore"
import { createHeaders, BASE_URL } from "../../services/techstore";
import { useNavigate } from "react-router-dom";


export default function Payment() { 
    const header = createHeaders();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState({});
    const [list, setList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (!auth) {
            return
        }
        const promise = getCart()
        promise.then(res => {
            setList(res.data.products)
            setTotalPrice(res.data.total)
            if (res.data.products.length > 0) {
                setDisabled(false)
            }
        })

        promise.catch(err => {
            alert("falha em carregar os items")
        })
    }, [])

    function enviarInfos(event){
        event.preventDefault();
        setDisabled(true);

        if(paymentInfo.cardNumber === undefined || paymentInfo.cardNumber === '' || paymentInfo.cardName === undefined || paymentInfo.cardName === ''){
            alert('Preencha todos os campos para continuar');
            setDisabled(false);
            return;
        }

        const dados = {
            cardName: paymentInfo.cardName,
            cardNumber: paymentInfo.cardNumber
        }

        const promise = axios.post(`${BASE_URL}/checkout`, dados, header);

        promise.then(res => {
            navigate('/');
            setDisabled(false);
        })

        .catch(err => {
            if(err.request.status === 404){
                alert('Carrinho vazio');
            }

            alert(err.request.status);
        })
    }



    return (
        <>
            <Apresentation>
                <h1>Checkout</h1>
            </Apresentation>
            <Container>
                <h2>Forma de pagamento</h2>
                <div>
                    <ion-icon name="card-outline"></ion-icon>
                    <h4>Cartão de Crédito ou Débito</h4>
                </div>
                <h3>
                    Dados do cartão
                </h3>
                <input type="text" placeholder="Nome no cartão" required onChange={e => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })} disabled={disabled}></input>
                <input type="number" placeholder="Numero do cartão" required onChange={e => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} disabled={disabled}></input>
            </Container>
            <Total>
                <h5>Total:</h5>R$: {totalPrice.toFixed(2)}
            </Total>
            <Button><button onClick={enviarInfos}><span>Concluir pedido</span></button></Button>
        </>
    );
}
const Apresentation = styled.div`
    width: 100%;
    height: 350px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    h1{
        font-weight: 600;
        font-size: 58px;
        line-height: 20px;
        color: #FFFFFF;
    }
`
const Container = styled.div`
    width: 100vw;
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    ion-icon{
       font-size: 30px;
       color: #b8b8b8;
    }

    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 20px;
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

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
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

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    

    margin:0 auto;

    button{
        border: none;
        width: 50%;
        height: 46px;
        background: #333333;
        border-radius: 5px;
        margin-bottom: 30px;
    }

        span{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            color: #FFFFFF;
        }

        :hover{
            cursor: pointer;
        }
    `;


const Total = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 30px;

    h5{
        font-weight: 700;
        color: #333333;
    }
    
`;