import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getCart } from "../../services/techstore"
import CardCartItem from "./CardCartItem"

export default function Cart() {
    const [list, setList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [disable, setDisable] = useState(true)

    const navigate = useNavigate()

    useEffect(() =>{
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (!auth) {
            return
        }
        const promise = getCart()
        promise.then(res => {
            setList(res.data.products)
            setTotalPrice(res.data.total)
            if(res.data.products.length > 0){
                setDisable(false)
            }
        })

        promise.catch(err =>{
            if(err.request.status === 404){
                return alert('Carrinho vazio')
            }
            alert("falha em carregar os items")
        })
    }, [refresh])
    
    return(
        <Container>
            <Apresentation>
                <h1>Carrinho</h1>
            </Apresentation>
            <List>
            <div>
                <span></span>
                <p className="produto">Produto</p>
                <p className="preco">Preço</p>
                <p className="qtd">Quantidade</p>
                <p className="total">Total</p>
            </div>
            
            {!list ? 
            <></> 
            : 
            list.map((item, index) => 
                <CardCartItem
                key={index}
                name={item.product}
                price={item.price}
                total={item.total}
                img={item.img}
                quantity={item.quantity}
                productId={item._id}
                setRefresh={setRefresh}
                refresh={refresh}
                />
                )
            }
            </List>
            <Total>
                <h1>Preço total:</h1>
                {totalPrice === 0 ? <></> : <h2>R${totalPrice.toFixed(2)}</h2>}
            </Total>
            {disable ? 
            <Button>Finalizar compra</Button>
            :
            <Button onClick={() => navigate('/checkout')}>Finalizar compra</Button>}
            
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
`

const List = styled.div`
    width: 70%;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
        border-bottom: 1px solid #989898;
        padding-right: 15px;
    }

    div span{
        width: 50px
    }

    .produto{
        width: 250px;
    }
    .preco{
        width: 77px;
    }
    .quantidade{
        width: 80px;
    }

    p{
        font-weight: 600;
        font-size: 19px;
        line-height: 20px;
        color: #282828;
        text-align: center;
    }

    @media (max-width: 1050px)
    {
    &&
    {
        width: 95%;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 30px;
        border-bottom: 1px solid #989898;
        padding-right: 15px;
    }

    div span{
        width: 5px
    }

    .produto{
        width: 125px;
    }
    .preco{
        width: 77px;
    }
    .quantidade{
        width: 80px;
    }

    p{
        font-weight: 600;
        font-size: 10px;
    }
    }
`

const Total = styled.div`
    width: 70%;
    border-top: 1px solid #989898;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    h1, h2{
        font-weight: 500;
        font-size: 32px;
        line-height: 20px;
        color: #282828;
    }

    @media (max-width: 1050px)
    {
    &&
    {
        width: 95%;
    }

    h1, h2{
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #282828;
    }
    }
`

const Button = styled.div`
    margin: 30px 0;
    background-color: #282828;
    width: 205px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;

    cursor: pointer;

    border-radius: 5px;

`