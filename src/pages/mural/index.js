import React, {Component} from 'react';

import Global ,{ MatchsDiv,ButtonMessages,ButtonMatches,ButtonsDiv,Line,PerfilDiv, UserDiv, UserImage, UserName, PerfilButton, MuralDiv } from './styles';

import MatchBox from '../../Components/MatchBox/index'

import { FaUserAlt } from 'react-icons/fa'

import pedro from './pedroalbuquerque.jpg'
import tanjiro from './tanjiro.jpg'
import monique from './monique.jpg'
import gui from './gui.jpg'

class Mural extends Component  {

  constructor(props) {
        super(props);
        this.state = {pageMatch : 0, arr: [
            {
                source: monique,
                name: 'Glória Monique',
                age: 19,
            },
            {
                source: gui,
                name: 'Guilherme Santiago',
                age: 20,
            },
            {
                source: tanjiro,
                name: 'tanjiro kamado',
                age: 18,
            },
            {
                source: tanjiro,
                name: 'tanjiro kamado',
                age: 18,
            },
            {
                source: tanjiro,
                name: 'tanjiro kamado',
                age: 18,
            },
        ]};
    }

  renderMatch(pageNumber) {
        pageNumber = pageNumber*5
        return <MatchsDiv>
            <MatchBox source={this.state.arr[pageNumber].source} name={this.state.arr[pageNumber].name} age={this.state.arr[pageNumber].age}></MatchBox>
            <MatchBox source={this.state.arr[pageNumber+1].source} name={this.state.arr[pageNumber+1].name} age={this.state.arr[pageNumber+1].age}></MatchBox>
            <MatchBox source={this.state.arr[pageNumber+2].source} name={this.state.arr[pageNumber+2].name} age={this.state.arr[pageNumber+2].age}></MatchBox>
            <MatchBox source={this.state.arr[pageNumber+3].source} name={this.state.arr[pageNumber+3].name} age={this.state.arr[pageNumber+3].age}></MatchBox>
            <MatchBox source={this.state.arr[pageNumber+4].source} name={this.state.arr[pageNumber+4].name} age={this.state.arr[pageNumber+4].age}></MatchBox>  
            </MatchsDiv>
    }

  render(){
    return ( 
        <> 
            <Global/>
            <PerfilDiv>
                <UserDiv>
                    <UserImage src={pedro}/>
                    <UserName>Pedro Albuquerque</UserName>
                    <PerfilButton>
                        <FaUserAlt size={22}></FaUserAlt>
                    </PerfilButton>
                </UserDiv>
                <Line></Line>
                <MuralDiv>
                    <ButtonsDiv>
                        <ButtonMatches>Matches</ButtonMatches>
                        <ButtonMessages>Messages</ButtonMessages>
                        </ButtonsDiv>
                        {this.renderMatch(0)}
                        
                        
                           
                </MuralDiv>
            </PerfilDiv>
        </>
    )
        } 
}

export default Mural;