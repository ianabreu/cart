import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
    Item, ImageArea, ImageProduct, TextArea, Name, Price, SellArea, CountArea,
    CountBtnRight, CountBtnLeft, CountBtnText, InputCount, DeleteBtn, DeleteIcon
} from './styles';


export default function CartProduct({ data }) {
    const { amountCartItem, deleteCartItem, setCartItem } = useContext(AuthContext);

    function countItem(operator) {
        amountCartItem(operator, data.id)
    }

    function formatPrice(value) {
        return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })

    }
    function handleDeleteCartItem(id, name) {
        Alert.alert(
            name.toUpperCase(),
            "Tem certeza que deseja remover do carrinho?",
            [
              {
                text: "Cancelar",
                onPress: () => '',
                style: "cancel"
              },
              { text: "Remover", onPress: () => setCartItem(deleteCartItem(id)) }
            ]
          );

    }
    return (
        <Item>
            <ImageArea>
                <ImageProduct source={{ uri: data.url }} />
            </ImageArea>

            <TextArea>

                <Name>{data.name}</Name>
                <Price>R$ {formatPrice(data.price)}</Price>

                <SellArea>
                    <CountArea>
                        <CountBtnLeft onPress={() => countItem('-')}>
                            <CountBtnText>-</CountBtnText>
                        </CountBtnLeft>

                        <InputCount>{data.amount}</InputCount>

                        <CountBtnRight onPress={() => countItem('+')}>
                            <CountBtnText>+</CountBtnText>
                        </CountBtnRight>
                    </CountArea>
                    <DeleteBtn onPress={() => handleDeleteCartItem(data.id, data.name)}>
                        <DeleteIcon/>
                    </DeleteBtn>
                </SellArea>
            </TextArea>
        </Item>
    );
}