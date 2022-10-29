import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';


export const HeaderContainer = styled.View.attrs({
    shadowColor: "#24262f",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
})`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom:2%;

    background-color: #FE7122;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #FFF;
`;
export const Menu = styled(Icon).attrs({
    name:'align-left',
    size:25,
})`
    color: #fff;
    margin-left: 20px;
`;
export const CartArea = styled.TouchableOpacity`
justify-content: center;
align-items: center;
    position: relative;
    left: auto;
    margin-right: 20px;
    height: 40px;
    width: 40px;
    //background-color: aquamarine;
`;
export const Cart = styled(Icon).attrs({
    name:'shopping-cart',
    size:25,
})`
    color: #fff;
`;

export const CartNumberArea = styled.View`
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: 1000;
    background-color: red;
    width: 22px;
    height: 22px;
    border-color: #FFF;
    border-width: 1px;
    border-radius: 25px;
    overflow: hidden;
`;
export const CartNumber = styled.Text`
    font-size: 10px;
    text-align: center;
    line-height: 15px;
    color: #FFF;
    font-weight: bold;
`;