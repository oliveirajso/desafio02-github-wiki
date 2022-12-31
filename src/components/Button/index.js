import React from 'react';

import { ButtonContainer } from './styles';

function Button({ onClick, title }) {
  return (
    <ButtonContainer onClick={onClick} title={title}>
      {title}
    </ButtonContainer>
  );
}

export default Button
