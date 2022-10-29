import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  EmptyContainer,
  Title,
  SubTitle,
  CtaButton,
  CtaButtonText,
  EmptyCartIcon,
  AreaTotal,
  Total,
  PriceTotal,
  Checkout,
  CheckoutText,
} from './styles';

import CartProduct from '../../components/CartProduct';

export default function Cart() {
  const { cartItem } = useContext(AuthContext);

  function formatPrice(value) {
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })

}
  function totalPrice(array) {
  let total = array.reduce( ( acc, item ) => acc + (item.amount * item.price), 0 );
    return formatPrice(total);
  }
  return (
    <Container>
      {cartItem.length === 0 ?

        <EmptyCart />

        :

        <>
          <FlatList
            style={{ marginBottom: 59 }}
            data={cartItem}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartProduct data={item} />
            )}
          />
          <AreaTotal>
           <View style={{flexDirection: 'row',justifyContent: 'center', alignItems:'center'}}>
            <Total>Total: </Total>
            <PriceTotal>R$ {totalPrice(cartItem)}</PriceTotal>
           </View>
            <Checkout onPress={() => alert('Página Finalizar Pedido')}>
              <CheckoutText>Finalizar Pedido</CheckoutText>
            </Checkout>
          </AreaTotal>

        </>


      }

    </Container>
  );
}

function EmptyCart() {
  const navigation = useNavigation();
  return (
    <EmptyContainer>

      <EmptyCartIcon />
      <Title>Carrinho Vazio</Title>
      <SubTitle>Continue com sua busca por um produto, voltando para a página inicial.</SubTitle>
      <CtaButton onPress={() => navigation.navigate('Home')}>
        <CtaButtonText>Página Inicial</CtaButtonText>
      </CtaButton>
    </EmptyContainer>
  )

}