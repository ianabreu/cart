import React, { useContext, useState } from 'react';
import {
    Item, ImageArea, ImageProduct, TextArea, Name, Price, SellArea, CountArea, 
    CountBtnRight, CountBtnLeft, CountBtnText, InputCount, CartBtnArea, CartBtnText,
} from './styles';
import {AuthContext} from '../../contexts/auth';
import { Alert, ToastAndroid } from 'react-native';

export default function Product({ data }) {
    const { addToCart } = useContext(AuthContext);
    const [count, setCount] = useState(1);

    function countItem(operator) {
        if (operator === '+') return setCount(count + 1);
        if (operator === '-') {
            let value = count - 1
            value <= 0 ? setCount(1) : setCount(value);
            return;
        }
    }

    function formatPrice(value) {
        return value.toLocaleString('pt-br', { minimumFractionDigits: 2 })

    }
    return (
        <Item>
            <ImageArea>
                <ImageProduct source={{ uri: data.url, }} />
            </ImageArea>

            <TextArea>

                <Name>{data.name}</Name>
                <Price>R$ {formatPrice(data.price)}</Price>

                <SellArea>
                    <CountArea>
                        <CountBtnLeft onPress={() => countItem('-')}>
                            <CountBtnText>-</CountBtnText>
                        </CountBtnLeft>

                        <InputCount>{count}</InputCount>

                        <CountBtnRight onPress={() => countItem('+')}>
                            <CountBtnText>+</CountBtnText>
                        </CountBtnRight>
                    </CountArea>

                    <CartBtnArea onPress={() => {
                        addToCart(data, count);
                        ToastAndroid.show('Produto Adicionado com Sucesso!', 1000)
                        setCount(1);
                        
                        }}>
                        <CartBtnText>Adicionar ao carrinho</CartBtnText>
                    </CartBtnArea>

                </SellArea>
            </TextArea>
        </Item>
    );
}