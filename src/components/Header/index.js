
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AuthContext } from "../../contexts/auth";

import { HeaderContainer, Title, Menu, Cart, CartArea, CartNumberArea, CartNumber } from './styles';


export default function Header() {
  const { cartItem } = useContext(AuthContext);
  const navigate = useNavigation();

  return (
    <HeaderContainer>
      <Menu onPress={() => alert('menu')}/>
      <Title>Produtos</Title>
      <CartArea
        onPress={() => navigate.navigate('Cart')}
      >
        {cartItem.length > 0 ? (
          <CartNumberArea>
            <CartNumber>{cartItem.length}</CartNumber>
          </CartNumberArea>)
          : ''}
        <Cart />
      </CartArea>
    </HeaderContainer>
  );
}