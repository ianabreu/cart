import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { Container } from './styles';

import Product from '../../components/Product';
import Header from '../../components/Header';

export default function Home() {
  const { products } = useContext(AuthContext);
  

  return (
    <Container>

      <Header/>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Product data={item} />}
          />

    </Container>
  );
};