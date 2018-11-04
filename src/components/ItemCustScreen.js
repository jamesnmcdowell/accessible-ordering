import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { media, Container, Container2 } from './Media';
import styled from 'styled-components';

let catOrder;

class ItemCustScreen extends React.Component {
    constructor (props) {
        super(props);
        console.log(props.item.ingredients);
        catOrder = Object.keys(props.item.ingredients)

        this.state = {
            catCustOpen: catOrder.reduce((a, c) => {
                a[c] = false;
                return a;
            },{})
        };
    }

    openCatCust (cat) {
        this.setState({
            catCustOpen: {
                ...this.state.catCustOpen,
                [cat]: true
            }
        });
    }

    render () {
        let {match, item} = this.props,
            {catCustOpen} = this.state;

        return (
            <Container2>
                <div>
                    <h1> {item.name} </h1>
                    <Gridlist>
                        {catOrder.map((c, i) =>
                            <Section key={`custcat${c}`}>
                            {(catCustOpen[c])?
                                (
                                    <form> 
                                    <fieldset>
                                    <legend>Select your {c} toppings:</legend>
                                    {
                                    Object.keys(item.ingredients[c]).sort()
                                          .map((cc) => (
                                              <div>
                                                <input aria-label={cc} role="checkbox"  type={(c === 'bread')? 'radio' : 'checkbox'} name={c} value={cc} defaultChecked={(item.ingredients[c][cc])? true : false}  />
                                                <label htmlFor={cc}>{cc}</label>               
                                              </div>
                                        ))
                                    }
                                    </fieldset>
                                    </form>
                                ) : (
                                    <div> 
                                        <BreadTitle tabindex="0" aria-label={`Current ${c} Selection`}> {c} : 
                                            
                                    {
                                    Object.keys(item.ingredients[c])
                                          .filter((cc) => (item.ingredients[c][cc]))
                                          .map((c) => (<SelectedSpan> {c},</SelectedSpan>))
                                          
                                    }     
                                        </BreadTitle>
                                        <Button role="button" onClick={this.openCatCust.bind(this, c)}> <span>{c} Customization</span></Button>
                                    </div>
                                )
                            }
                            </Section>
                        )}
                    </Gridlist>
                </div>
            </Container2>
        )
    };

}

let mapStateToProps = (state, props) => {
    let { match } = props;
    let { categories, items } = state;
    let itemId = parseInt(match.params.itemId, 10);
    let item = items.find((obj) => obj.id === itemId);
    console.log(item);
    // let relatedProducts = products.filter((obj) => obj.categoryId === product.categoryId && obj.id !== product.id).slice(0, 3);
    return { item: item };
};

let ItemCustScreenState = connect(
    mapStateToProps,
)(ItemCustScreen);

export default ItemCustScreenState;


let Gridlist = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    
`;
let Section = styled.div`
    border: 2px #828282 solid;
    padding 2rem;
`;
let BreadTitle = styled.h2`
    text-transform:capitalize;
`;
let SelectedSpan = styled.span`
    font-weight: 300;

`;

let Button = styled.button `
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 1rem;
    background-color: #F36C3E;
    color: white;
    &:hover {
    }
    span {
        text-transform:capitalize;
    }
`;

// .replace(/\b\w/g, l => l.toUpperCase())
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
