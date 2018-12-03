
import AriaModal from 'react-aria-modal';
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class ZipRequest extends Component {
    constructor (props) {
        super(props);
        this.state={
            displayLoc: false,
            zip: "",
            focusCat: null,
        }
    }
    componentDidMount () {
        // setTimeout(() => {
        //     this.props.updateZip('30047');
        // }, 3000);
    }

    componentDidUpdate(prevProps) {
        if (this.state.displayLoc && this.state.focusCat) {
            document.querySelector(`.${this.state.focusCat}`).focus();
            this.setState({ focusCat: null });
        }
    }

    toggleDisplayLoc() {
        console.log(this.state.zip);
        if(/[0-9]{5}/.test(this.state.zip)) {
            this.setState({displayLoc:true});
            console.log("hi");
        }
    }
    updateZip(e) {
        console.log(e.target.value);
        this.setState({zip:e.target.value})
        this.setState({ focusCat: 'location-list' });  
    }

    handleKeyPress = (event) => {
        console.log(event);
        if (event.key == 'Enter' || event.charCode == 13 ) {
            event.preventDefault();
            event.stopPropagation();
            console.log('enter press here! ')
            if(/[0-9]{5}/.test(this.state.zip)) {
            this.setState({ displayLoc: true });
            this.setState({ focusCat: 'location-list' });    
        }
        }
    }

    render() {
        let { updateZip, resturants, updateResturantId, resturantId} = this.props;
        let { zip, displayLoc} = this.state;
        return (
            <div>
            { !resturantId &&
            <AriaModal
                titleId="demo-two-title"
                onExit={() => { }}
                underlayClickExits={false}
                verticallyCenter={true}
                initialFocus="#modal-title"
                titleText="Find nearby Location"
            >
                    <Modal id="demo-two-modal" className="modal">
                            <Title tabIndex="0" id="modal-title" className="modal-title">
                                Find nearby Location
                            </Title>
                        {(!displayLoc )&&
                            <p> To start your order, you need to first select a location for pickup. Please enter your zip code to find nearby locations. </p>
                        }
                            <div>
                            <label htmlFor="cardnumber">Zip code:</label>
                            <GridSeparate>
                            <Input onKeyDown={this.handleKeyPress.bind(this)} type="text" name="cardnumber" id="cardnumber" onChange={this.updateZip.bind(this)}/>
                           
                            <Button onClick={this.toggleDisplayLoc.bind(this)}>
                                Search
                            </Button>
                        </GridSeparate>
                        </div>
                         
                        <div>
                        {displayLoc &&
                        <LocationTitle aria-label={`There are ${resturants.length} locations near ${zip}`} tabIndex="0" className="location-list">There are {resturants.length} locations near {zip} </LocationTitle >
                        }
                        { displayLoc &&
                            resturants.map((c, i) =>
                            <LocationBox>
                                <div>
                                    <LocationTitle>{c.name}</LocationTitle>
                                    <p>{c.street}</p>
                                    <p>{c.city} {c.state} {c.zip}</p>
                                 </div>
                                <Button onClick={updateResturantId.bind(null,c.id) }> Select </Button>
                            </LocationBox>
                        )
                        
                        }
                        </div>
                    
                    </Modal>

            </AriaModal>
            }
            </div>
        )
    }
}

let mapStateToProps = (state, props) => ({
    resturantId: state.user.resturantId, 
    resturants: state.resturants
  });

let mapDispatchToProps = (dispatch) => ({
    updateResturantId: (resturantId)=> {dispatch({type:'UPDATE_USER',payload: {resturantId} }) }
});

let ZipRequestState = connect(
    mapStateToProps,
    mapDispatchToProps
)(ZipRequest);

export default ZipRequestState;

let Modal = styled.div`
    padding: 2rem;
`;

let Input = styled.input`

    font-size: 16px;
    line-height: 22px;
    color: rgb(72, 72, 72);
    background-color: rgb(255, 255, 255);
    margin-bottom: 8px;
    position: relative;
    z-index: 0;
    display: block;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(219, 219, 219);
    border-radius: 2px ;
    width: 100%;
    margin: 0 0 15px;
    padding: 8px;
    box-sizing: border-box;
    margin: 0 auto;
    tex-align: left;
`;

let Button = styled.button`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #5F5B5C;
    background-color: #FFC810
    color: white;
    color: black;
    
    &:hover {
    }
    span {
        text-transform: uppercase;
    }
`;

let GridSeparate = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px;
`;
let LocationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    p {
        margin: 0;
    }
`;
let Title = styled.h2`
    outline: 0;
`;
let LocationTitle  = styled.p`
    outline: 0;
    font-weight: 500;
`;