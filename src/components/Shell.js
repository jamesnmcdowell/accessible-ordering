import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import {
    withRouter
} from 'react-router-dom';

class Shell extends Component {
    
    componentDidUpdate(prevProps) {
        console.log(withRouter);
        console.log(this.props);
        if (this.props.location !== prevProps.location) {
            document.querySelector(".scroll-grabber").scrollTop = 0;
        }
    }

    render() {
        let {children, match} = this.props;
        return (
            <Site >
                <SiteHeader match={match} />
                <Grab className="scroll-grabber" >
                <SiteContent  >
                    {children}
                </SiteContent>
                </Grab>
                <SiteFooter />
            </Site>
        )
    }
}
    

export default  withRouter(Shell);

let Site = styled.div`
    min-height 100vh;

`;
let Grab = styled.div`
    overflow: scroll;
    height 100%;
`;

let SiteHeader = styled(Header) `

`;

let SiteContent = styled.div`
    width: 100%;
   
`;

let SiteFooter = styled(Footer) `
`;



    




// import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import styled from 'styled-components';
// import {
//     withRouter
// } from 'react-router-dom';

// class Shell extends Component {

//     componentDidUpdate(prevProps) {
//         console.log(this.props);
//         if (this.props.location !== prevProps.location) {
//             document.querySelector(".scroll-grabber").scrollTop = 0;
//         }
//     }

//     render() {
//         let { children, match } = this.props;
//         return (
//             <Site className="scroll-grabber">
//                 <SiteHeader className="scroll-grabber" match={match} />
//                 {children}
//                 <SiteFooter />
//             </Site>
//         )
//     }
// }


// export default withRouter(Shell);

// let Site = styled.div`
//     height: 100vh;
//     overflow: scroll;
// `;

// let SiteHeader = styled(Header) `
//     flex: 0 0 auto;
// `;

// let SiteContent = styled.div`
//     flex: 1 0 auto;
//     width: 100%;
   
// `;

// let SiteFooter = styled(Footer) `
//     flex: 0 0 auto;
// `;





