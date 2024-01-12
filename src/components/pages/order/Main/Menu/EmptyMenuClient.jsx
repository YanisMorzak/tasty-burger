import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <h1>Victime de notre succès !</h1>
      <h2> De nouvelles recettes sont en cours de préparation...</h2>
      <h2>À très vite !</h2>
    </EmptyMenuClientStyled>
  )
}
const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-family: 'Italiana', sans-serif;
    text-transform: uppercase;
  }

  h2{
    font-family: 'Italiana', sans-serif;
    color: ${theme.colors.greySemiDark};
    padding: 22px;
  }

  
`;
