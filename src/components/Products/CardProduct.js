import styled from "styled-components"
import { addCart } from "../../services/techstore"

export default function CardProduction({name, price, img, productId}){

    function addToCart(id){
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (auth == null){
            return alert("e necessario efetuar o login para adicionar ao carrinho")
        }
        const promise = addCart(id)
        promise.catch(() => {
            alert("não foi possivel adicionar o item ao carrinho")
        });
        promise.then(() => {
            alert("adicionado com sucesso")
        })
    }

    return(
        <Container>
            <img src={img} alt="product-img"/>
            <h4>{name}</h4>
            <p>{price.toFixed(2)}</p>
            <AddCart onClick={() => addToCart(productId)}>
                <h6>adicionar ao carrinho</h6>
                <h6>+</h6>
            </AddCart>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    position: relative;
    width: 258px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    margin-bottom: 20px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    cursor: pointer;

    
    img{
        width: 100%;
        height: 312px;
        object-fit: cover;
        margin-bottom: 25px;
        border-radius: 10px 10px 0 0;

    }

    h4{
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        color: #282828;
        margin-bottom: 18px;
    }

    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 8px;
        color: #282828;
        margin-bottom: 10px;
    }

`

const AddCart = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 10px;
    z-index: 5;
    top: 270px;
    left: 0;
    width: 40px;
    height: 40px;
    background-color: #282828;
    color: #f2f2f2;
    font-weight: 500;
    line-height: 12px;
    transition: 1s;

    cursor: pointer;

    h6:first-child{
        font-size: 0;
        transition: 1s;
    }

    h6:last-child{
        font-size: 26px;
    }

    &&:hover{
        width: 150px;
    }
    &&:hover h6:first-child{
        transition: 1s;
        font-size: 14px;
        display: initial;
    }
`