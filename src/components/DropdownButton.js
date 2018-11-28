import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

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
        const { options, cost} = this.props;

        const menuItemElements = options.map((option, i) => {
            let itemClass = 'AriaMenuButton-menuItem';
            if (selected === option) {
                itemClass += ' is-selected';
            }
            const display = option === 'destroy' ? 'destroy this menu' : `${option} - $${cost[i]}`;
            return (
                <li className="AriaMenuButton-menuItemWrapper" key={i}>
                    <MenuItem className={itemClass} value={option} text={option}>
                        {display}
                    </MenuItem>
                </li>
            );
        });

        return (
            <div>
                <Wrapper
                    className="AriaMenuButton"
                    onSelection={this.handleSelection.bind(this)}
                >
                    <Button tag="button" className="AriaMenuButton-trigger">
                        Add to Cart
          </Button>
                    <Menu>
                        <ul className="AriaMenuButton-menu">{menuItemElements}</ul>
                    </Menu>
                </Wrapper>
            </div>
        );
    }
}

export default DropdownButton;