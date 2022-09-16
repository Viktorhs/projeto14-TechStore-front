import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { BASE_URL } from "../../services/techstore";
import UserContext from "../../context/UserContext";

export default function Login(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail]= useState('');
    const {setUser} = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    
    function signIn(event){
        event.preventDefault();

        const body = {
            email,
            password
        }

        setDisabled(true);
        setLoading(true);

        const promise = axios.post(`${BASE_URL}/login`,body);

        promise.then(res => {
            
            const dadosUser = {
                name: res.data.name,
                token: res.data.token
            }
            
            const loginSerialized = JSON.stringify(dadosUser);
            localStorage.setItem("techstore", loginSerialized);
            setUser(res.data);
            navigate("/", {replace: true})
        })

        .catch(err => {
            if(err.request.status === 404){
                setDisabled(false);
                setLoading(false);
                return alert('Usuário não encontrado')
            }

            if(err.request.status === 401){
                setDisabled(false);
                setLoading(false);
                return alert('Email ou senha inválidos');
            }
                alert(err.request.status);
                setDisabled(false);
                setLoading(false);
            })

        }

    return(
        <Container>
            <h1>Login</h1>
            <Form onSubmit={signIn}>
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} disabled={disabled}></input>
                <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)} disabled={disabled}></input>
                <button disabled={disabled}>{loading ? <ThreeDots type="TreeDots" color="#FFFFFF" height={50} width={50} /> : <span>Entrar</span>}</button>
            </Form>
            <h3 onClick={() => navigate("/registro")}>Não tem conta? Cadastre-se!</h3>
        </Container>
    );
}

const Container = styled.div`
    width: 70vw;
    height: auto;
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 15px 5px;

    h1{
        font-family: 'Poppins', cursive;
        font-weight: 500;
        font-size: 40px;
        line-height: 32px;
        margin-top: 30px;
    }

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #333;
        padding-bottom: 20px;
        cursor: pointer;
    }
    

`;

const Form = styled.form`
    width: 70vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 30px;

    input{
        margin-top: 15px;
        width: 100%;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;

        ::placeholder{
            padding-left: 15px;
            width: auto;
            height: 23px;
            left: 40px;
            top: 251px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
    }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;    
        border: none;
        margin-top: 15px;
        margin-bottom: 36px;
        width: 100%;
        height: 46px;
        left: 23px;
        top: 375px;
        background: #333333;
        border-radius: 5px;

        span{
            width: auto;
            height: 23px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
        }

        :hover{
            cursor: pointer;
        }
    }
`;