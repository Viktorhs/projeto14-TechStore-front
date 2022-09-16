import styled from "styled-components"

export default function CardProduction(){
    return(
        <Container>
            <img src="https://br.celulares.com/fotos/samsung-galaxy-m52-5g-93891-g-alt.jpg" alt="product-img"/>
            <h4>samsung m52</h4>
            <p>R$ 2000,00</p>
            <AddCart>
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
    margin: 0 5px;
    margin-bottom: 20px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

    
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