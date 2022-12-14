import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getOneProduct } from "../../services/techstore"

export default function ProductPage(){
    const [product, setProduct] = useState([])
    const { idProduto } = useParams()

    useEffect(()=>{
        const promise = getOneProduct(idProduto)
        promise.catch(() => {

        })
        promise.then((res)=>{
            setProduct(res.data)
        })
    })

    return(
        <Container>
            <Apresentation>
                <h1>{product.type} / {product.product}</h1>
            </Apresentation>
            <Infos>
                <img src={product.img} alt='img-produto'/>
                <div>
                    <span>
                        <h1>{product.product}</h1>
                        <h2>{product.mark}</h2>
                    </span>
                    <span>
                        <h1>Preço: </h1>
                        <h1>R${product.price}</h1>
                    </span>
                </div>
            </Infos>
            <Button>Adicionar ao carrinho</Button>
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
    min-height: 150px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;

    h1{
        margin-left: 90px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

const Infos = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 50%;
        height: 300px;
        padding-top: 30px;
        margin-left: 26px;
        margin-top: 50px;
    }

    span{
        margin-bottom: 40px;
        margin-left: 10px;
    }
    span:last-child{
        display: flex;
    }

    span:last-child h1{
        margin-left: 10px;
        display: flex;
    }

    h1{
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
    }
    h2{
        font-weight: 400;
        margin-top: 5px;
        font-size: 13px;
        line-height: 20px;
    }

    img{
        width: 405px;
        height: 486px;
        object-fit: cover;
    }
`

const Button = styled.div`
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