import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

class Shell extends Component {
    
    componentDidUpdate(prevProps) {
        console.log(this.props);
        if (this.props.location !== prevProps.location) {
            document.querySelector(".scroll-grabber").scrollTop = 0;
        }
    }

    render() {
        let {children, match} = this.props;
        return (
            <Site>
                <SiteHeader match={match} />
                <SiteContent className="scroll-grabber">
                    {children}
                </SiteContent>
                <SiteFooter />
            </Site>
        )
    }
}
    

export default Shell;

let Site = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

let SiteHeader = styled(Header) `
    flex: 0 0 auto;
`;

let SiteContent = styled.div`
    flex: 1 0 auto;
    width: 100%;
   
`;

let SiteFooter = styled(Footer) `
    flex: 0 0 auto;
`;



    

