import React from "react";

import CustomButton from "../CustomButton/CustomButton";
import './cartDropDown.scss';

const CartDropDown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
