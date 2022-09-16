import styled from "styled-components"
import CardProduction from "./CardProduct"

export default function Products() {
    return(
        <Container>
            <CardProduction/>
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