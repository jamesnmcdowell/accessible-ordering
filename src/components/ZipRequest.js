
import AriaModal from 'react-aria-modal';
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class ZipRequest extends Component {
    constructor (props) {
        super(props);
        this.state={
            displayLoc: false,
            zip: ""
        }
    }
    componentDidMount () {
        // setTimeout(() => {
        //     this.props.updateZip('30047');
        // }, 3000);
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
                focusDialog={true}
            >
                    <div id="demo-two-modal" className="modal">
                        <header className="modal-header">
                            <h2 id="demo-two-title" className="modal-title">
                                This modal has a title
                            </h2>
                        </header>
                        <div>
                            <label htmlFor="cardnumber">Zip code:</label>
                            <input type="text" name="cardnumber" id="cardnumber" onChange={this.updateZip.bind(this)}/>
                            <button onClick={this.toggleDisplayLoc.bind(this)}>
                                Search
                            </button>
                        </div>
                         
                        <div>

                        { displayLoc &&
                            resturants.map((c, i) =>
                            <div>
                                <p> {c.name}{c.street} </p>
                                <button onClick={updateResturantId.bind(null,c.id) }> Select </button>
                            </div>
                        )}
                        </div>
                    
                    </div>

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