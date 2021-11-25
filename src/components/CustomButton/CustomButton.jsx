import React from 'react';
import { CustomButtonContainer } from './CustomeButton.styles';

import './customButton.scss';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
