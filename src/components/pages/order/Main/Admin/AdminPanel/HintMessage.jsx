import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';
import {HiCursorClick} from "react-icons/hi"


export default function HintMessage() {
  return (
    <HintMessageStled>
        <span className='hint'>Cliquer sur un produit du menu pour le modifier</span>  <HiCursorClick />       
    </HintMessageStled>
  )
}
const HintMessageStled = styled.div`
font-size: ${theme.fonts.size.P2};
text-transform: uppercase;
color: ${theme.colors.greyBlue};
position: relative;
top: 50px;


.hint {
    font-family: 'Italiana', sans-serif;
    margin-right: 10px;
    margin-left: 20px;
    font-weight: 900;
}


  
`;
