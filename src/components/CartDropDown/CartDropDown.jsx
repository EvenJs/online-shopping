import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import './cartDropDown.scss';


const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))) : (<span className='empty-message'>Your cart is empty</span>)
    }
    </div>
    <CustomButton onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
