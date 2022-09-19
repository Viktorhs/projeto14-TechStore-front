import styled from "styled-components";

export default function Infos(){
    return(
        <Apresentation><h1>Compras concluidas</h1></Apresentation>
    );
}

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