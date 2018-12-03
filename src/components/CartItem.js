import React from 'react';
import styled from 'styled-components';
//fix
let CartItem = ({ item, costMap }) =>  { 
    let keys = Object.keys(item.ingredients);
    let basePrice;
    if (item.ingredients.size) {
    let size;
    Object.keys(item.ingredients.size).map( (key) => {
        if (item.ingredients.size[key] === true) {
            size = key;
        }
    })
    console.log(costMap);
     basePrice= costMap[size]; 
    } else {
        basePrice = item.price;
    }
    return (
    <ItemContainer>
        <FlexBetween>
            <Name> {item.name}</Name>
            <Price>${basePrice}</Price>
        </FlexBetween>

        
        
        {
        Object.keys(item.ingredients).map((k, i) => { 
            while(i<1) {
            return (
            <div>
            <Price>
            <IngredTitle> {k}: </IngredTitle>
            {
                Object.keys(item.ingredients[k]).map((kk, ii) => {
                    if (item.ingredients[k][kk]) {
                    return (
                        <span> {kk} </span> 
                    )
                    }
                }
            )
            }
            </Price>
            </div>
        )
    }
        }
        )
        

        }
   
        {(item.paidExtras) &&
        <div>
        <FlexBetween>
            <IngredTitle>Paid add-ons</IngredTitle>
            <Price>${item.price - basePrice}</Price>
        </FlexBetween>
        
        {item.paidExtras.map(item =>
            <div>
                <P>{item.item} : ${item.cost} </P>
               
            </div>
        )}
        </div>
        }
        
    </ItemContainer>
    ) }
export default CartItem;

let FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;
let ItemContainer = styled.div`
    background-color: white;
    padding:  2rem;
`;
let IngredTitle = styled.span`
    font-weight: 500;
    text-transform: Capitalize;
`;
let Name = styled.h3`
    margin: 0;
`;
let Price = styled.p`
    margin: 0;
`;
let P = styled.p`
    margin: 0;
`;


// Object.entries(item.ingredients[key]).forEach(
//     ([k, v]) => {
//         if (v === true) {
//             console.log(k)
//             return (
//                 <span>{k} </span>
//             )
//         }
//     }
// )


