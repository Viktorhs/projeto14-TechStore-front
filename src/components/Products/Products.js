import { useEffect, useState } from "react"
import styled from "styled-components"
import { getProducts } from "../../services/techstore"
import CardProduction from "./CardProduct"

export default function Products() {

    const [list, setList] = useState([])

    useEffect(() => {

        const promise = getProducts()
        promise.then(res => {
            setList(res.data)
            console.log(res.data)
        })

        promise.catch(err =>{
            alert("falha em carregar os items")
        })
    }, [])

    return(
        <Container>
            {list.map((item, index) => 
            <CardProduction name={item.product} price={item.price} productId={item._id} img={item.img} key={index} />
            )}
        </Container>

    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;


    @media (max-width: 1050px)
    {
    &&
    {
        padding: 0 20px;
    }
    }

`