import { useState, useEffect } from "react";
import { BASE_URL, createHeaders } from "../../services/techstore";
import styled from "styled-components";
import axios from "axios";
import UserInfos from "./UserInfos";
import Infos from "./Header";


export default function OrdersInfo(){
    const header = createHeaders();
    const [userInfos, setUserInfos] = useState([]);

    useEffect(() =>{
        const auth = JSON.parse(localStorage.getItem("techstore"))
        if (!auth) {
            return
        }
        const promise = axios.get(`${BASE_URL}/infos`,header)
        promise.then(res => {
            setUserInfos(res.data)
        })

        promise.catch(err =>{
            if(err.request.status === 404){
                return alert('Nenhum pedido encontrado')
            }
            alert(err.request.status)
        })
    }, [])

    return(
        <Container>
            <Infos />
            <Order>
            {userInfos.map((item, index) => 
                <UserInfos 
                    key={index} 
                    orderId={item.orderId} 
                    orderDate={item.orderDate}
                    produto={item}
                     /> )} 
            </Order>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 1050px)
    {
    &&
    {
        padding: 0 20px;
    }
    }

`

const Order = styled.div`
    width: 100%;
    height:auto;
    margin-bottom: 40px;
`;