import React from 'react';

import './Button.scss';

interface ButtonProps {
  type: string,
  onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  let btnClassList = 'button';
  const [
    primaryType, secondaryType, leftArrowType, rightArrowType,
  ] = ['primary', 'secondary', 'arrow-left', 'arrow-right'];

  switch (type) {
    case primaryType:
    case secondaryType:
      btnClassList += ` button--${type}`;
      break;
    case leftArrowType:
    case rightArrowType:
      btnClassList += ` button-arrow button-${type.replace(/[-]/, '--')}`;
      break;
    default:
      break;
  }

  return (
    <button type="button" className={btnClassList} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
