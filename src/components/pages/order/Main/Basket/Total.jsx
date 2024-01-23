import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function Total({amountToPay}) {
  return (
    <TotalStyled>
        <div className="total">Total</div>
        <div className="amount">{amountToPay}</div>
    </TotalStyled>
  )
}

const TotalStyled = styled.div`
height: 70px;
background: ${theme.colors.background_dark};
color: ${theme.colors.primary};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 16px;
font-size: ${theme.fonts.size.P3};
text-transform: uppercase;
`;
