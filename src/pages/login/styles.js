import styled, {createGlobalStyle} from 'styled-components';
import img from './fundo.jpg'


export const LoginDiv = styled.div`
    margin-left: 80%;
    width: 300px;
    height: 400px;
    background-color: #000;
    border-radius: 10px;
`;

export const DadosDiv = styled.div`
    width: 300px;
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ButtonDiv = styled.div`
    height: 100px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoDiv = styled.div`
    width: 300px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const P = styled.p`
    color: #fff;
    font-family: 'Sansita Swashed', cursive;
    font-size: 20px;
`;

export const LoginButton = styled.button`
    margin-top: 15px;
    height: 30px;
    width: 80px;
    border: none;
    border-radius: 5px;
    background-color: #FF3D4E;
    color: #fff;
    font-family: 'Sansita Swashed', cursive;
    &:hover {
        background-color: #FF5D6B;
    }
`;

export const CreateButton = styled.a`
    margin-top:15px;
    color: #fff;
    font-size: 13px;
    font-family: 'Sansita Swashed', cursive;
`;


export const LoginInput = styled.input`
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 3px;
    text-indent: 10px;
`

export const PasswordInput = styled.input`
    margin-top: 10px;
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 3px;
    text-indent: 10px;
`


export const Img = styled.img`
    margin-top: 40px;
    width: 150px;
    height: 70px;
`

export const Img1 = styled.img`
    width: 200px;
    height: 20px;
`

export default createGlobalStyle`
    body {
        width: 98vw;
        height: 97vh;
        background: url(${img});
        background-size: 100%;
        display: flex;
        flex: 1;
        align-items: center;
    }
`