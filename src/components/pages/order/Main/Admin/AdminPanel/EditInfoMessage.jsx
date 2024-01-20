import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>Cliquer sur un produit du menu pour le modifier en temps réel</EditInfoMessageStyled>
  )
}
const EditInfoMessageStyled = styled.div`
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};
`;
