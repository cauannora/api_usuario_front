import styled from "styled-components";

export const MsgError = styled.span`
    color: #ff3333;
    width: 100%;
    padding: 3px;
    font-size: 12px;
    text-align: left;
    display: block;
    margin-top: 0;
`;

export const DivSucesso = styled.div`
    background: #fff;
    padding: 200px 40px;
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        height:(400vh / 2);
        width: (500vw / 2);
        align-items: center;
        text-align: center;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: transparent;
`;

export const Form = styled.form`
    width: 400px;
    height: 400px;
    background: #fff;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #ff3333;
        margin-bottom:15px;
        border: 1 solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    input {
        height: 50px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        &::placeholder {
            color: #999;
        }
    }

    button {
        color: #fff;
        font-size: 16px;
        background: #9cc451;
        height: 40px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }

    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }

    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }
    
    label{
        margin: 0 20px; 
        align-items: center;
        font-size: 35px;
        margin-bottom: 15px;
    }
`;