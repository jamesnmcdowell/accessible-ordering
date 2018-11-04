import React, { Component } from 'react';
import Router from './Router';

class ScrollRouteTop extends Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.page && this.props.location !== prevProps.location) {
            document.querySelector(".scroll-grabber").scrollTop = 0;
        }
    }
    render() {
        return (
            <Router />
        )
    }
}

export default ScrollRouteTop;