import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container, ContainerV } from './Media';

let colorKeys = {
    "UX Research": "#1B67AB",
    "UX Design": "#F1E639",
    "Development": "#D0021B",

}

let PortfolioItem = ({ item }) =>
    <Link className="product-card-link" to={`/work/${item.slug}`} >
        <Card>
            <Img src={require(`../assets/${item.image}`)} />
            <Info>
                <TitleBox>
                    <Title>{item.title}</Title>
                </TitleBox>
                <Description>
                    {item.description}
                </Description>
            </Info>
            <Tags>
                {
                    item.category.map((c, i) => {
                        return (i < item.category.length - 1) ? <Text key={`${i}_${c}`} col={colorKeys[c]} > {c} </Text> : <Text key={`${i}_${c}`} col={colorKeys[c]} > {c} </Text>

                    }
                    )
                }
            </Tags>
            

            
        </Card>
    </Link>

export default PortfolioItem ;

let Card = styled.div`
    display: grid;
    grid-template-columns: auto 60px ;
    grid-template-rows: auto auto ;
    text-align: left;
    margin: 0 auto;
    max-width: 600px;
`;

let Img = styled.img`
    width: 100%;
 
    padding: 2px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    
`;

let Info = styled.div`
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    padding-left: 0;
    padding-top: 0;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`;
let TitleBox = styled.div`
  
`;
let Tags = styled.div`
    display: flex;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    
`;

let Title = styled.h5`
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    font-size:2.2rem;
    ${media.phone`
    font-size:2.5rem;
    `}
    ${media.bigPhone`
    font-size:2.7rem;
    `}
     ${media.tablet`
    font-size:2.9rem;
    `}
    
   
`;
let Text = styled.span`
    font-style: italic;
    color: #777777;
    margin-right: 5px;
    border-bottom: 6px solid ${props => props.col ? props.col : "black" };
    flex: 1;
    text-transform: uppercase;
    &:last-child {
        margin-right: 0;
    }
`;
let Description = styled.p`
    margin-top: 0;
    color: black;   
    font-size: 1.6rem;
`;