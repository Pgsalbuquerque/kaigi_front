import React from 'react';

import { MatchBoxDiv, Img, Name, Age, MessageButton, RemoveButton } from './styles';

import { FaRegComment, FaTimes } from 'react-icons/fa'


const MatchBox = ( props ) => {
  return <MatchBoxDiv >
    <Img src={props.source}></Img>
    <Name>{props.name}</Name>
    <Age>{props.age}</Age>
    <MessageButton>
      <FaRegComment size={20} color="#fff">

      </FaRegComment>
    </MessageButton>

    <RemoveButton>
      <FaTimes size={20} color="#fff">

      </FaTimes>
    </RemoveButton>

  </MatchBoxDiv>
}

export default MatchBox;