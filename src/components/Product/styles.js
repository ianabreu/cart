import styled from 'styled-components/native';

export const Item = styled.View.attrs({
    shadowColor: "#24262f",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.20,
    shadowRadius: 5.62,
    elevation: 7,
})`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 1% 4%;
    padding: 2%;

    background-color: #FFF;
`;


export const ImageArea = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;

export const ImageProduct = styled.Image.attrs({
    resizeMode: "contain",
})`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const TextArea = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: auto;
`;

export const Name = styled.Text`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    color: #24262F;
    padding: 10px 0px;
`;
export const Price = styled.Text`
    font-size: 16px;
    color: #F25C2E;
`;
export const SellArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 5%;
`;

export const CountArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CountBtnRight = styled.Pressable`
    background-color: #FFAA2C;
    width: 30px;
    height: 30px;
    `;
export const CountBtnLeft = styled.Pressable`
    background-color: #FFAA2C;
    width: 30px;
    height: 30px;
    `;

export const CountBtnText = styled.Text`
    color: #FFF;
    font-size: 20px;
    text-align: center;
`;

export const InputCount = styled.Text`
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;

`;
export const CartBtnArea = styled.TouchableOpacity`
    justify-content: center;
    width: 60%;
    background-color: #FFAA2C;
    padding: 5px;
    margin: 5px;
    border-radius: 7px;
`;
export const CartBtnText = styled.Text`
    color: #FFF;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`;