import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';
import styled from 'styled-components';


class DropdownButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: '', noMenu: false };
    }

    handleSelection(value) {
        if (value === 'destroy') {
            this.setState({ noMenu: true });
        } else {
            this.setState({ selected: value });
            this.props.onSelect(value);
        }
    }

    render() {
        const { selected, noMenu } = this.state;
        const { options, cost, settings} = this.props;

        const menuItemElements = options.map((option, i) => {
            let itemClass = 'AriaMenuButton-menuItem';
            if (selected === option) {
                itemClass += ' is-selected';
            }
            let display;
            if(cost) {
                display = option === 'destroy' ? 'destroy this menu' : `${option} - $${cost[i]}`;
            } else {
                display = option === 'destroy' ? 'destroy this menu' : `${option} `;
            }
            return (
                <li className="AriaMenuButton-menuItemWrapper" key={i}>
                    <MenuItem className={itemClass} value={option} text={option}>
                        {display}
                    </MenuItem>
                </li>
            );
        });

        return (
            <Wrapper 
                className="AriaMenuButton"
                onSelection={this.handleSelection.bind(this)}
            >
                <ButtonStyled aria-label={settings.ariaTitle} tabIndex="0" tag="button" className="AriaMenuButton-trigger">
                    {settings.title}
                </ButtonStyled>
                <Menu>
                    <ul className="AriaMenuButton-menu">{menuItemElements}</ul>
                </Menu>
            </Wrapper>
        );
    }
}

export default DropdownButton;


let ButtonStyled = styled(Button) `
    button {
        background-color: #red
        
    }
    
`;



