import styled from "styled-components";

export default function UserInfos({orderId, orderDate, produtoNome, img, price, total}){
    return(
        <Container>
            <Pedido>
                <h3>Ticket do pedido: <b>{orderId}</b></h3>
                <h3>Data do pedido: {orderDate}</h3>
                <Products>
                    <h3>Produtos: </h3>
                    <Product>
                        <h3>{produtoNome}</h3>
                        <img src={img} alt="imagem-produto"/>
                        <h3>R$: {price}</h3>
                        <Total><h3>Pedido total:</h3> {total}</Total>
                    </Product>
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
    flex-direction: column;
    margin-top: 40px;

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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: blue;
`;

const Total = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 20px;
    color: #333333;

    h3{
        font-weight: 700;
    }
`;
