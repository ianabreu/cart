import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
    flex: 1;
    background-color: #ECECEC;
`;
export const EmptyContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const EmptyCartIcon = styled(Icon).attrs({
    name: 'shopping-cart',
    size: 100,
})`
    color: #24262F;
    padding: 5px;
    `;

export const Title = styled.Text`
    font-size: 30px;
    color: #24262F;
    text-transform: uppercase;
    `;
export const SubTitle = styled.Text`
    font-size: 18px;
    color: #3E404A;
    text-align: center;
    width: 85%;
    margin-top: 10%;
`;
export const CtaButton = styled.TouchableOpacity`
    width: 85%;
    margin-top: 10%;
    padding: 3%;
    background-color: #FE7122;
    border-radius: 10px;
    `;
export const CtaButtonText = styled.Text`
    text-align: center;
    color: #FFF;
    font-size: 18px;
`;


export const AreaTotal = styled.View.attrs({
    elevation: 70,
})`
    flex-direction: row;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 60px;
    
    background-color: #FFF;
    
    color: #FFF;
`;

export const Total = styled.Text`
    margin-left: 10px;
    color: #24262f;
    font-size: 18px;
`;
export const PriceTotal = styled.Text`
    font-weight: bold;
    color: #24262f;
    font-size: 18px;
`;
export const Checkout = styled.TouchableOpacity`
background-color: #FE7122;
padding: 10px;
justify-content: center;
align-items: center;
`;
export const CheckoutText = styled.Text`
    color: #FFF;
    font-size: 16px;
`;