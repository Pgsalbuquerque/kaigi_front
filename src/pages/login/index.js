import React, {Component} from 'react';

import Global ,{ P,LoginDiv, LogoDiv, Img, Img1, LoginInput, PasswordInput, DadosDiv, ButtonDiv, LoginButton, CreateButton } from './styles';

import Logo from './logo.png'

import KaigiText from './nome.png'

class Login extends Component {


    render(){
        return (
        <>
            <Global/>
            <LoginDiv>
                <LogoDiv>
                    <Img src={Logo}></Img>
                    <Img1 src={KaigiText}></Img1>
                </LogoDiv>

                <DadosDiv>
                    <P>Faça login agora!</P>
                    <LoginInput type="text" placeholder="Seu login"></LoginInput>
                    <PasswordInput type="password" placeholder="Sua senha"></PasswordInput>
                </DadosDiv>
                <ButtonDiv>
                    <LoginButton>ENTRAR</LoginButton>
                    <CreateButton href="create">Crie sua conta gratuita!</CreateButton>
                </ButtonDiv>
            </LoginDiv>
        </>
        )
    }
}

export default Login;