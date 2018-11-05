import React from 'react';
import styled from 'styled-components';

let CartItem = ({ item }) =>  { 
    let keys = Object.keys(item.ingredients);
    return (
    <ItemContainer>
        <FlexBetween>
            <Name> {item.name}</Name>
            <Price>${item.price}</Price>
        </FlexBetween>
        {
        Object.keys(item.ingredients).map((k, i) => 
            <div>
            <Price>
            <IngredTitle> {k}: </IngredTitle>
            {
                Object.keys(item.ingredients[k]).map((kk, ii) => {
                    if (item.ingredients[k][kk]) {
                    return (
                        <span> {kk}, </span> 
                    )
                    }
                }
            )
            }
            </Price>
            </div>
        )

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


