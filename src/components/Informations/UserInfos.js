import styled from "styled-components";

export default function UserInfos({orderId, orderDate, produto}){

    return(
        <Container>
            <Pedido>
                <h3>Ticket do pedido: <b>{orderId}</b></h3>
                <h3>Data do pedido: {orderDate}</h3>
                <h3>Produtos: </h3>
                <Products>
                    {produto.userOrder[0].products.map(item => 
                    <Product>
                        <h3>{item.product}</h3>
                        <img src={item.img} alt="imagem-produto"/>
                        <h3>R$: {item.price}</h3>
                    </Product>)}
                    
                </Products>
            </Pedido>
        </Container>)
}

const Container = styled.div`
    width: 100%;
    height: auto;
`;

const Pedido = styled.div`
    width: 100%;
    height: auto;
    border:  2px solid gray;
    margin-bottom: 30px;
    padding: 20px;

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        margin-bottom: 15px;
    }

    b{
        font-weight: bold;
    }


`
const Products = styled.div`
    width: 100%;
    height: auto;
    margin-bottom:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

     h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        margin-bottom: 15px;
    }

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #333333;
        margin-bottom: 15px;
    }

    img{
        max-width:200px;
        max-height:150px;
        width: auto;
        height: auto;
        object-fit: cover;
        margin-bottom: 10px;
    }
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: auto;
    display: flex;
    border: 1px solid #282828;
    flex-direction: column;
    margin: 5px;
`;
