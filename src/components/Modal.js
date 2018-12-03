import React from 'react';
import ReactDOM from 'react-dom';

import AriaModal from 'react-aria-modal';
import styled from 'styled-components';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        console.log("true");
        this.state = {
            modalActive: false
        };

        this.activateModal = this.activateModal.bind(this);
        this.deactivateModal = this.deactivateModal.bind(this);
    }

    activateModal = () => {
        this.setState({ modalActive: true });
    };

    deactivateModal = () => {
        this.setState({ modalActive: false });
    };

    render() {
        return (
            <div>
                { this.state.modalActive ? 
                : null
                }
            </div>
               
        );
    }
}

export default AriaModal;
