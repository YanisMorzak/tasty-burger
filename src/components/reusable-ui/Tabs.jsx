import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Tabs({Icon}) {
  return (
    <TabsStyled>
        <div className='icon'>{Icon}</div>
    </TabsStyled>
  )
}
const TabsStyled = styled.button`
  height: 43px;
  padding: 0 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 1px;

  //fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  
  //border-radius
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover{
    border-bottom: 2px solid  ${theme.colors.white};
  }

  .icon{
    display: flex;
  }
`;
