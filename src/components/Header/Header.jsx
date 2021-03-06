import React from 'react';
// import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropDown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';
import './header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to = '/shop'>SHOP</OptionLink>
        <OptionLink to = '/shop'>CONTACT</OptionLink>
        { 
          currentUser ?
          (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>) 
          : (<OptionLink to='/signin'> SIGN IN</OptionLink> )
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropDown />
      }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
