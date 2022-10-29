import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola 350ml",
      price: 19.90,
      url: 'https://nuestrofuturocomun.com/wp-content/uploads/2017/06/Coca-Cola.jpg'
    },
    {
      id: '2',
      name: "Chocolate ao leite Nestle 90g",
      price: 6.50,
      url: 'https://www.lojacooperativaconsul.com.br/wp-content/uploads/2020/07/3615596.png'
    },
    {
      id: '4',
      name: "Queijo Minas 500g",
      price: 15,
      url: 'https://th.bing.com/th/id/OIP.5zESRPADl8yMUjBtkqBwhgHaHY?pid=ImgDet&rs=1'
    },
    {
      id: '5',
      name: "Batata frita Ruffles 92g",
      price: 23.90,
      url: 'https://tb1821.vteximg.com.br/arquivos/ids/179834-1000-1000/batata-frita-ruffles-original-92-gr-1.jpg?v=637461435796970000'
    },
    {
      id: '6',
      name: "Guarana lata 350ml",
      price: 6.00,
      url: 'https://th.bing.com/th/id/OIP.gyoiqx4OfYfr2Y83uWIQ8AHaHa?pid=ImgDet&rs=1'
    },
    {
      id: '7',
      name: "Achocolatado Em Pó Nescau Nestle Lata 200g",
      price: 9.00,
      url: 'https://geant.vteximg.com.br/arquivos/ids/250178-1000-1000/517458.jpg?v=637248918687170000'
    },
    {
      id: '8',
      name: "Cerveja Skol 350ml Lata",
      price: 2.70,
      url: 'https://cdn.awsli.com.br/800x800/1134/1134517/produto/84563577/f936b32bd5.jpg'
    },
    {
      id: '9',
      name: "Vinho Almadén Cabernet Sauvignon 750ml",
      price: 29.00,
      url: 'https://a-static.mlcdn.com.br/800x560/vinho-almaden-cabernet-sauvignon-750-ml-almadan/monacoeventosltda/5fb8685e731a11ecb61e4201ac18503a/79b5cba8bd0431e14c34794bbea86dfe.jpeg'
    },
  ]);

  const [cartItem, setCartItem] = useState([]);

  function addToCart(product, amount) {
    let itens = [...cartItem];
    const item = {
      id: product.id,
      amount: amount,
      name: product.name,
      price: product.price,
      url: product.url,
    }

    if (itens.length === 0) {
      itens.push(item);
      setCartItem(itens);
      return;
    }

    itens.forEach((i) => {
      if (item.id === i.id) {
        i.amount = i.amount + amount;
        return;
      }
      if (itens.find(i => i.id === item.id) === undefined) {
        itens.push(item);
      }
    });
    setCartItem(itens);

  }
  function amountCartItem(operator, id) {
    let products = [...cartItem];

    if (operator === '+') {
      products.forEach((product) => product.id === id ? product.amount = product.amount + 1 : '');
    } else if (operator === '-') {
      products.forEach((product) => {
        if (id === product.id) {
          product.amount > 1 ? product.amount = product.amount - 1
            :
            Alert.alert(`${product.name.toUpperCase()}`, "Tem certeza que deseja remover o item do carrinho?",
            [{
                text: "Cancelar", onPress: () => product.amount = 1,
                  style: "cancel"
                },
                { text: "Remover", onPress: () => {
                  
                  products = deleteCartItem(id)
                  setCartItem(products);
                
                } }
              ]
            );
            
        }

      });
    }
    setCartItem(products);
  }

  function deleteCartItem(id) {
    let arrayCartItem = [...cartItem];
    let newArray = arrayCartItem.filter((i) => i.id !== id)
    return newArray;
  }

  return (
    <AuthContext.Provider value={{ products, setProducts, cartItem, setCartItem, addToCart, amountCartItem, deleteCartItem }}>
      {children}
    </AuthContext.Provider>
  );
}