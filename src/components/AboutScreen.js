import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
// import jamesProfile from '../assets/profilecropnormfinaltransp.png';
import jamesProfile from '../assets/james-profile3.jpg';

let AboutScreen = () =>
  <Container vert>
    <GridContainer>
      <Img src={jamesProfile} />
      <div>
        <Title>Who I am </Title>
        <Text>I am a naturally curious person. I’ve always felt driven to understand the core of what binds us together as human beings. I’ve always hesitated to limit myself into one specific discipline in life and believe that possessing a strong interdisciplinary background is necessary to understand our world’s greatest challenges, let alone solve them. I have a background in applied linguistics, German, Persian, Russian, cultural studies, international affairs, web development, user research, and design. I  am currently pursuing a master’s in Human Computer Interaction at the <A target="_blank" href="http://mshci.gatech.edu/"> Georgia Institute of Technology </A>.</Text>
      </div>
    </GridContainer>
      <Title>Design Inspiration </Title>
      <Text>This website’s design alone speaks volumes about my range of experiences and studies that have led me down a winding path to become the person who I am today. This website’s design is inspired from graphic design and typography pioneers from the <A target="_blank" href="https://en.wikipedia.org/wiki/Bauhaus"> Bauhaus Movement </A>, including <A target="_blank" href="https://en.wikipedia.org/wiki/Herbert_Bayer"> Herbert Bayer </A> and <A target="_blank" href="https://en.wikipedia.org/wiki/Jan_Tschichold">Jan Tschichold</A>. I was introduced to and inspired by the Bauhaus movement and its design philosophy while studying in the very city in which the movement began — <A target="_blank" href="https://en.wikipedia.org/wiki/Weimar"> Weimar, Germany</A>.</Text>
      
      <Title>Seeing the bigger picture </Title>
      <Text>While living in Weimar, Germany, I frequently spent time wandering through the halls of museums and the <A target="_blank" href="https://en.wikipedia.org/wiki/Bauhaus_University,_Weimar">Bauhaus University</A> in awe of the movement’s vast influence and impact on so many aspects of our modern lives from industrial to graphic design. As a student of culture and language, I immersed myself in poetry as I traced the steps of the great German poets down cobblestone streets, <A target="_blank" href="https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe">Goethe</A> and <A target="_blank" href="https://en.wikipedia.org/wiki/Friedrich_Schiller">Schiller</A>, who spent much of their lives in Weimar. As a student of politics I was inspired by the <A target="_blank" href="https://en.wikipedia.org/wiki/Weimar_Republic">Weimar Republic</A>, Germany’s first, short-lived attempt at establishing a democracy.</Text> 
      <Text>Yet I also often passed under a balcony in the city’s main square, from which Hitler frequently gave speeches to a cheering crowd. The Bauhaus school was, after all, shut down by the Nazis.  The reason I’m sharing this story with you is to illustrate that only after deeply understanding a wide range of disciplines including language, history, politics, art, and culture is one able to gain a holistic understanding of something and all of its subtle complexities.  The world is full of contradictions and shades of grey. The ability to deftly navigate through these complexities and connect the seemingly unconnected dots is exactly what is needed to address challenging problems.</Text>
      
      <Title>The good and the bad </Title>
      <Text>I am passionate about understanding complex problems and am eager to pick up any tool possible that may lead to solving them. Technology offers us an incredibly powerful medium to address these problems and has tremendous potential to improve our lives. At the same time, technology can also worsen our lives; for example it has clearly negatively impacted our ability to focus and relate to one another.</Text>
      
      <Title>Striving for more </Title>
      <Text>I believe that good design is not just about creating engaging, delightful experiences — it is about adding genuine value to people's life while being as unobtrusive and unassuming as possible. It is critical to carefully consider the impact of a design on an individual, their relationships with others, and society as a whole.</Text> 
      <div>
      </div>
  </Container>

export default AboutScreen;

let GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 2rem;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}

`;
let Title = styled.h3`
  font-size: 2.5rem; 
  color:#1B69AB;
  margin-bottom: 0;
  text-transform: uppercase;
  margin-top: 2rem;;
  &:first-child {
    margin-top: 0;
  }

`;
let Text = styled.p`
  font-size: 1.7rem; 
`;
let Img = styled.img`
  width: 100%; 
`;
let A = styled.a`
border-bottom: 3px solid #F1E639 ;
`;