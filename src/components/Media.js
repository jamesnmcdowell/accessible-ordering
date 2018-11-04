import styled, { css } from 'styled-components'

const sizes = {
    giant: 1150,
    desktop: 950,
    tablet: 750,
    bigPhone:500,
    phone: 350
}


// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
    return accumulator
}, {});


export const Container2 = styled.div`
    ${media.phone`padding: ${props => props.vert ? '0 10px 140px 10px' : '140px 10px 0 10px'};`}
    ${media.tablet`padding: ${props => props.vert ? '0 20px 160px 10px' : '160px 20px 0 10px'};`}
    ${media.desktop`padding: ${props => props.vert ? '0 30px 180px 30px' : '180px 30px 0 30px'};`}
    ${media.giant`max-width: 1000px; margin: 0 auto;`} 
`;
export const Container = styled.div`
    ${media.phone`padding: ${props => props.vert ? '140px 10px' : '0 10px'};`}
    ${media.tablet`padding: ${props => props.vert ? '160px 20px' : '0 20px'};`}
    ${media.desktop`padding: ${props => props.vert ? '180px 30px' : '0 30px'};`}
    ${media.giant`max-width: 1000px; margin: 0 auto;`} 
`;


export const responsiveFontSize = ({ minFont, maxFont, minScreen = 320, maxScreen = 1200, units = "px" }) => {
    return {
        fontSize: `calc(${minFont}${units}+${maxFont - minFont} * (100vw-${minScreen}${units})/${maxScreen - minScreen})`
    }
}
