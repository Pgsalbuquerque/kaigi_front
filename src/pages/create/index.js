import React, {Component} from 'react';

import Global ,{ P,LoginDiv, LogoDiv, Img, Img1, Input, DadosDiv, ButtonDiv, LoginButton, CreateButton } from './styles';

import Logo from './logo.png'

import KaigiText from './nome.png'

class Create extends Component {
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
                    <P>Crie sua conta!</P>
                    <Input type="text" placeholder="Seu login"></Input>
                    <Input type="email" placeholder="Seu Email"></Input>
                    <Input type="password" placeholder="Sua senha"></Input>
                    <Input type="password" placeholder="Confirmar sua senha"></Input>
                    
                </DadosDiv>
                <ButtonDiv>
                    <LoginButton>CADASTRAR</LoginButton>
                    <CreateButton href="login">Já possuo login!</CreateButton>
                </ButtonDiv>
            </LoginDiv>
        </>
        )
    }
}

export default Create;