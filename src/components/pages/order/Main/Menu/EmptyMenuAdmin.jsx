import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Button from '../../../../reusable-ui/Button';

export default function EmptyMenuAdmin({resetProducts}) {
  return (
    <EmptyMenuAdminStyled>
      <h1>Le menu est vide ?</h1>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <Button onClick={resetProducts} label={"Générer de nouveaux produits"} version="normal"/>
    </EmptyMenuAdminStyled>
  )
}
const EmptyMenuAdminStyled = styled.div`
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

  button{
    width: auto;
  }
  
`;
