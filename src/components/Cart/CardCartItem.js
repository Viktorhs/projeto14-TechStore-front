import styled from "styled-components";
import { addCart, removeItem, removeOneQuantity } from "../../services/techstore";

export default function CardCartItem({name, price, img, productId, quantity, total, setRefresh, refresh}) {

    function refreshPage(){
        if(refresh === false){
            setRefresh(true)
        }
        if(refresh === true){
            setRefresh(false)
        }
    }
    
    function addMore(id){
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (auth == null){
            return alert("e necessario efetuar o login")
        }
        const promise = addCart(id)
        promise.catch(() => {
            alert("não foi possivel adicionar a unidade")
        });
        promise.then(() => {
            refreshPage()
        })
    }

    function removeOne(id){
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (auth == null){
            return alert("e necessario efetuar o login")
        }
        const promise = removeOneQuantity(id)
        promise.catch(() => {
            alert("erro em remover unidade")
        });
        promise.then(() => {
            refreshPage()
        })
    }

    function removeOneItem(id){
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (auth == null){
            return alert("e necessario efetuar o login")
        }
        const promise = removeItem(id)
        promise.catch(() => {
            alert("não foi possivel remover o item do carrinho")
        });
        promise.then(() => {
            refreshPage()
        })
    }

    return(
        <Container>
            <h5 onClick={() => removeOneItem(productId)}>X</h5>
            <span className="inf">
                <img src={img} alt="imagem-produto"/>
                <h6>{name}</h6>
            </span>
                <h6>R$ {price}</h6>
            <span className="quantity">
                <ion-icon name="remove-circle-outline" onClick={() => removeOne(productId)}></ion-icon>
                <h6>{quantity}</h6>
                <ion-icon name="add-circle-outline" onClick={() => addMore(productId)}></ion-icon>
            </span>
            <h6>R$ {total}</h6>
        </Container>
    )
}

const Container = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #939393;

    margin: 10px 0;

    h5{
        width: 50px;
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        color: #939393;

        cursor: pointer;
    }

    img{
        width: 100px;
        height: 80px;
        object-fit: cover;
    }
    span{
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .inf h6{
        width: 100%;
        text-align: start;
    }

    .quantity{
        width: 80px;
        
    }

    ion-icon{
        font-size: 30px;
        cursor: pointer;
    }

    @media (max-width: 1050px){
    &&{
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #939393;}

    h5{
        width: 25px;
        font-size: 12px;
    }

    img{
        width: 80px;
        height: 60px;
    }
    span{
        width: 125px;
    }

    .quantity{
        width: 60px;
        
    }

    ion-icon{
        font-size: 20px;
        cursor: pointer;
    }
    }

`