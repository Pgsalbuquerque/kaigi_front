import styled, {createGlobalStyle} from 'styled-components';


export const PerfilDiv = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: #FF2452;
    
`;

export const Ul = styled.ul`
    position: relative;
    list-style-type: none;
    background: #fff;
`;

export const UserDiv = styled.div`
    width: 30vw;
    height: 12vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-color: #000;
    border:2px;
`;

export const UserImage = styled.img`
    margin-left: 30px;
    width: 60px;
    height: 60px;
    background-color: #000;
    border-radius: 50%;
`;

export const UserName = styled.p`
    margin-left: 20px;
    font-family: 'Staatliches', cursive;
    font-size: 24px;
    color: #fff;
`;

export const PerfilButton = styled.button`
    margin-left: 50px;
    width: 40px;
    height: 40px;
    border: none;
    color: #fff;
    background-color: #FF2452;
    
`;

export const Line = styled.div`
    height: 1px;
    width: 30vw;
    background-color: #fff;
`;

export const ButtonsDiv = styled.div`
    margin-top: 20px;
    width: 30vw;
    height: 3vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 15px;
`;

export const ButtonMatches = styled.button`
    font-size: 16px;
    font-family: 'Staatliches', cursive;
    color: #fff;
    background-color: #FF2452;
    border: none;
`;

export const ButtonMessages = styled.button`
    font-size: 16px;
    font-family: 'Staatliches', cursive;
    color: #fff;
    background-color: #FF2452;
    border: none;
`;

export const MuralDiv = styled.div`
    margin-top: 2px;
    width: 30vw;
    height: 84vh;
`;

export const MatchsDiv = styled.div`
    margin-top: 25px;
    height: 400px;
    width: 30vw;
`;

export default createGlobalStyle`
    body {
        background-color: #fff;
        padding: 0;
        margin: 0;
    }
`

