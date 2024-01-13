import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className='submit-message'>
        <FiCheck className='icon'/>
        <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.success};

    .icon{
      margin-left: 10px;
      border: 1px solid ${theme.colors.success};
      border-radius: 50px;
      width: 1.3em;
      height: 1.3em;
    }

    span{
      margin-left: 10px;
    }
`;
